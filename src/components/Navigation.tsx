import { NavLink } from "@/components/NavLink";
import { BarChart3, TrendingUp, Users, Grid3x3 } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: Grid3x3, label: "Dashboard" },
    { to: "/trending", icon: TrendingUp, label: "Trending" },
    { to: "/creators", icon: Users, label: "Creators" },
  ];

  return (
    <nav className="border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              IP Royalty Visualizer
            </h1>
          </div>
          <div className="flex gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                activeClassName="!text-primary !bg-primary/10 font-medium"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
