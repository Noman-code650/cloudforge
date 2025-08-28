import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  Upload, 
  Zap,
  AlertTriangle,
  CheckCircle2,
  Activity
} from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  variant: any;
  status?: "running" | "stopped" | "warning" | "success";
}

export const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: "start-monitoring",
      label: "Start Monitoring",
      icon: <Play className="h-4 w-4" />,
      variant: "hero",
      status: "stopped"
    },
    {
      id: "backup-data",
      label: "Backup Data",
      icon: <Download className="h-4 w-4" />,
      variant: "secondary"
    },
    {
      id: "sync-modules",
      label: "Sync Modules",
      icon: <RotateCcw className="h-4 w-4" />,
      variant: "outline"
    },
    {
      id: "deploy-updates",
      label: "Deploy Updates",
      icon: <Upload className="h-4 w-4" />,
      variant: "success"
    }
  ];

  const systemStatus = [
    { label: "Docker Services", status: "running", count: 8 },
    { label: "SSH Connections", status: "success", count: 3 },
    { label: "AWS Resources", status: "warning", count: 12 },
    { label: "Background Tasks", status: "running", count: 5 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      default:
        return <Pause className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {actions.map((action) => (
              <Button
                key={action.id}
                variant={action.variant}
                className="h-auto flex-col gap-2 p-4 hover:scale-105 transition-transform"
              >
                {action.icon}
                <span className="text-xs text-center">{action.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {systemStatus.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50">
              <div className="flex items-center gap-3">
                {getStatusIcon(item.status)}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {item.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};