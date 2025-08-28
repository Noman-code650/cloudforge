import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  features: string[];
  status: "active" | "beta" | "coming-soon";
  onClick: () => void;
  className?: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon: Icon,
  category,
  features,
  status,
  onClick,
  className
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "beta":
        return "bg-warning text-warning-foreground";
      case "coming-soon":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-elevated hover:scale-[1.02] cursor-pointer glass-card",
        "border-gradient-to-br from-primary/20 to-accent/20 bg-gradient-card",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
            <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
          </div>
          <Badge className={cn("font-medium", getStatusColor(status))}>
            {status.replace("-", " ")}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <CardTitle className="text-xl font-bold group-hover:gradient-text transition-all">
            {title}
          </CardTitle>
          <Badge variant="outline" className="w-fit text-xs">
            {category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                {feature}
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <Button 
          className="w-full group-hover:shadow-glow transition-all bg-gradient-primary hover:bg-gradient-secondary"
          size="sm"
        >
          Launch Module
        </Button>
      </CardContent>
    </Card>
  );
};