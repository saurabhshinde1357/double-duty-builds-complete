
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { Layers, Plus, Calendar, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "planning" | "in-progress" | "completed";
  teamSize: number;
  deadline: string;
  progress: number;
}

const Projects = () => {
  const navigate = useNavigate();
  
  // Mock projects data - in a real app, this would come from an API
  const [projects, setProjects] = useState<Project[]>(() => {
    // Try to get projects from localStorage if any
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [
      {
        id: "1",
        name: "Website Redesign",
        description: "Complete overhaul of company website with modern design principles",
        status: "in-progress",
        teamSize: 4,
        deadline: "2025-06-15",
        progress: 75
      },
      {
        id: "2",
        name: "Mobile App Development",
        description: "Creating a cross-platform mobile application for our clients",
        status: "in-progress",
        teamSize: 6,
        deadline: "2025-08-20",
        progress: 30
      },
      {
        id: "3",
        name: "Marketing Campaign",
        description: "Q2 marketing initiative for product launch",
        status: "completed",
        teamSize: 3,
        deadline: "2025-04-10",
        progress: 100
      }
    ];
  });

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
          {projects.map((project) => (
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
