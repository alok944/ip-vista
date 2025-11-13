import { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import { IPAsset, Derivative } from "@/mock/data";
import { Card } from "@/components/ui/card";

interface IPGraphProps {
  ip: IPAsset;
  derivatives: Derivative[];
}

const IPGraph = ({ ip, derivatives }: IPGraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = [
      {
        data: { id: ip.id, label: ip.name, type: "parent" }
      },
      ...derivatives.map((deriv) => ({
        data: { id: deriv.id, label: deriv.name, type: "derivative" }
      })),
      ...derivatives.map((deriv) => ({
        data: { source: ip.id, target: deriv.id }
      }))
    ];

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "hsl(210, 100%, 50%)",
            label: "data(label)",
            color: "#fff",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": "12px",
            "font-weight": 600,
            width: 80,
            height: 80,
            "text-wrap": "wrap",
            "text-max-width": "70px",
            "border-width": 2,
            "border-color": "#fff",
            "text-outline-width": 2,
            "text-outline-color": "hsl(210, 100%, 50%)"
          }
        },
        {
          selector: "node[type='parent']",
          style: {
            "background-color": "hsl(210, 100%, 50%)",
            width: 100,
            height: 100,
            "font-size": "14px"
          }
        },
        {
          selector: "node[type='derivative']",
          style: {
            "background-color": "hsl(190, 100%, 45%)"
          }
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "hsl(220, 15%, 88%)",
            "target-arrow-color": "hsl(220, 15%, 88%)",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier"
          }
        }
      ],
      layout: {
        name: "circle",
        padding: 50
      }
    });

    return () => {
      cy.destroy();
    };
  }, [ip, derivatives]);

  return (
    <Card className="p-6 shadow-[var(--shadow-card)]">
      <h3 className="text-lg font-semibold mb-4">Derivative Graph</h3>
      <div
        ref={containerRef}
        className="w-full h-[400px] bg-muted/30 rounded-lg border border-border"
      />
    </Card>
  );
};

export default IPGraph;
