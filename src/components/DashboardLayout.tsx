
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, User, Home, Layers, Settings, Users, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Here you would clear any auth tokens
    localStorage.removeItem("token");
    navigate("/login");
  };

  const sidebarLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <Home className="w-4 h-4 mr-2" /> },
    { name: "Projects", path: "/projects", icon: <Layers className="w-4 h-4 mr-2" /> },
    { name: "Team", path: "/team", icon: <Users className="w-4 h-4 mr-2" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="w-4 h-4 mr-2" /> }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-1 border-r bg-white">
          <div className="flex items-center h-16 px-4 border-b">
            <Link to="/dashboard" className="flex items-center">
              <h1 className="font-bold text-lg">WorkspaceHub</h1>
            </Link>
          </div>
          <div className="flex-1 px-2 py-4">
            <nav className="space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-slate-100"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="px-2 py-4 border-t">
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Sheet>
        <div className="flex md:hidden fixed top-0 left-0 right-0 items-center h-16 px-4 border-b bg-white z-10">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <div className="ml-4 font-bold">WorkspaceHub</div>
        </div>
        <SheetContent side="left" className="w-64 pt-10">
          <div className="flex flex-col h-full">
            <div className="flex-1 px-2 py-4">
              <nav className="space-y-1">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-slate-100"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="px-2 py-4 border-t">
              <Button 
                variant="ghost" 
                className="w-full flex items-center justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-col flex-1 md:pl-0 pt-16 md:pt-0">
        {/* Top Navigation */}
        <header className="hidden md:flex h-16 items-center border-b bg-white px-6 justify-between">
          <h2 className="text-lg font-medium">Dashboard</h2>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>John Doe</span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
