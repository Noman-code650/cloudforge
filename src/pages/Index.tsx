import React from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsOverview } from "@/components/dashboard/stats-overview";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { ModulesGrid } from "@/components/dashboard/modules-grid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-3xl" />
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text animate-fade-in">
              CloudForge Dashboard
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unified automation platform combining 10 powerful modules for comprehensive 
              system management, cloud operations, and intelligent workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-glow hover:shadow-elevated transition-all hover:scale-105">
                Explore Modules
              </button>
              <button className="px-8 py-3 glass-card text-foreground rounded-lg font-semibold border border-primary/20 hover:border-primary/40 transition-all">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Quick Actions */}
        <QuickActions />

        {/* Modules Grid */}
        <ModulesGrid />
      </main>
    </div>
  );
};

export default Index;
