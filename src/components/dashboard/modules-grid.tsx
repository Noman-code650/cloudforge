import React, { useState } from "react";
import { ModuleCard } from "@/components/ui/module-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/data/modules";
import { Search, Filter, Grid3X3, List } from "lucide-react";

export const ModulesGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["all", ...Array.from(new Set(modules.map(m => m.category)))];
  
  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleModuleClick = (moduleId: string) => {
    console.log("Module clicked:", moduleId);
    // This would typically navigate to the module or open a modal
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold gradient-text">Available Modules</h2>
          <p className="text-muted-foreground">Choose from our comprehensive suite of automation tools</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-background/50"
          />
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/20 transition-colors capitalize"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          Showing {filteredModules.length} of {modules.length} modules
        </span>
        {selectedCategory !== "all" && (
          <Badge variant="secondary" className="text-xs">
            {selectedCategory}
          </Badge>
        )}
      </div>

      {/* Modules Grid/List */}
      <div className={
        viewMode === "grid" 
          ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" 
          : "space-y-4"
      }>
        {filteredModules.map((module) => (
          <ModuleCard
            key={module.id}
            title={module.title}
            description={module.description}
            icon={module.icon}
            category={module.category}
            features={module.features}
            status={module.status}
            onClick={() => handleModuleClick(module.id)}
            className={viewMode === "list" ? "max-w-none" : ""}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No modules found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search terms or filters
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};