import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { Plus, Calendar, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Project, projectsService } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
  const navigate = useNavigate();
  
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: projectsService.getProjects,
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading projects",
        description: "There was an error loading your projects. Please try again.",
        variant: "destructive",
      });
    }
  }, [error]);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "planning":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Button onClick={() => navigate("/projects/new")}>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow cursor-pointer" 
                  onClick={() => navigate(`/projects/${project.id}`)}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>{project.name}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClass(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                <CardDescription className="mt-1">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">Progress</div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.progress === 100 
                          ? "bg-green-500" 
                          : "bg-blue-500"
                      }`} 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-end mt-1 text-xs text-gray-500">
                    <span>{project.progress}%</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(project.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{project.teamSize}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
