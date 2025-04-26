
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Users, Clock, CheckCircle, AlertCircle } from "lucide-react";
import Layers from "@/components/ui/Layers";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for dashboard
  const stats = [
    { title: "Total Projects", value: "12", icon: <Layers className="h-4 w-4" /> },
    { title: "Team Members", value: "8", icon: <Users className="h-4 w-4" /> },
    { title: "Due this week", value: "5", icon: <Clock className="h-4 w-4" /> }
  ];
  
  const recentProjects = [
    { id: "1", name: "Website Redesign", progress: 75, status: "In Progress" },
    { id: "2", name: "Mobile App Development", progress: 30, status: "In Progress" },
    { id: "3", name: "Marketing Campaign", progress: 100, status: "Completed" }
  ];
  
  const tasks = [
    { id: "1", title: "Review design mockups", status: "todo", project: "Website Redesign" },
    { id: "2", title: "Update API documentation", status: "todo", project: "Mobile App" },
    { id: "3", title: "Customer feedback meeting", status: "inprogress", project: "Marketing" },
    { id: "4", title: "Fix navigation menu bug", status: "inprogress", project: "Website Redesign" },
    { id: "5", title: "Social media assets", status: "done", project: "Marketing" }
  ];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "todo":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "inprogress":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "done":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button onClick={() => navigate("/projects/new")}>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Recent Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Your team's latest projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="border rounded-md p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{project.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.status === "Completed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {project.status}
                      </span>
                    </div>
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
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Tasks */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Your Tasks</CardTitle>
              <CardDescription>Tasks assigned to you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {tasks.map((task) => (
                  <div key={task.id} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(task.status)}
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <p className="text-xs text-gray-500">{task.project}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
