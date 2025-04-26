
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-800">WorkspaceHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
            <Button onClick={() => navigate('/register')}>Get Started</Button>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Manage Your Teams With Confidence
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              A multi-tenant platform where teams collaborate, manage projects, and scale together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate('/register')}>
                Start For Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/demo')}>
                See How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything Your Team Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Team Workspaces</CardTitle>
                <CardDescription>Create isolated environments for each team</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Each organization gets their own private workspace with full customization options and data isolation.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Drag-and-drop task boards</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Organize projects with intuitive kanban boards. Assign tasks, track progress, and hit your deadlines.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Role-Based Access</CardTitle>
                <CardDescription>Granular permission controls</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Admins can invite team members and assign roles with different permission levels across the platform.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>For small teams getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$0</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Up to 5 team members
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Basic project management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Limited storage (1GB)
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary border-2 shadow-lg">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For growing teams</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$29</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Up to 20 team members
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Advanced project management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> 10GB storage
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Real-time notifications
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Pro</Button>
              </CardFooter>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$99</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Unlimited team members
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Premium features
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> 100GB storage
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Priority support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">WorkspaceHub</h3>
              <p className="text-slate-400">Where teams thrive together</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} WorkspaceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
