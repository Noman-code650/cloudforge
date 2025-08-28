import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Shield, Cpu } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: "up" | "down" | "stable";
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend }) => {
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="glass-card hover:shadow-card transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center space-x-2 mt-1">
          <Badge 
            variant="outline" 
            className={`text-xs ${getTrendColor(trend)} border-current`}
          >
            {change}
          </Badge>
          <p className="text-xs text-muted-foreground">from last month</p>
        </div>
      </CardContent>
    </Card>
  );
};

export const StatsOverview: React.FC = () => {
  const stats = [
    {
      title: "Active Modules",
      value: "8",
      change: "+2",
      icon: <Activity className="h-4 w-4 text-primary" />,
      trend: "up" as const
    },
    {
      title: "System Load",
      value: "23%",
      change: "-5%",
      icon: <Cpu className="h-4 w-4 text-accent" />,
      trend: "down" as const
    },
    {
      title: "Automation Tasks",
      value: "156",
      change: "+23",
      icon: <Zap className="h-4 w-4 text-secondary" />,
      trend: "up" as const
    },
    {
      title: "Security Score",
      value: "98%",
      change: "stable",
      icon: <Shield className="h-4 w-4 text-success" />,
      trend: "stable" as const
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
};