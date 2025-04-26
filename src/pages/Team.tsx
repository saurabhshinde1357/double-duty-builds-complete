
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

const Team = () => {
  // Mock team members data
  const [teamMembers] = useState<TeamMember[]>([
    { 
      id: "1", 
      name: "John Doe", 
      email: "john@example.com", 
      role: "Admin",
    },
    { 
      id: "2", 
      name: "Jane Smith", 
      email: "jane@example.com", 
      role: "Developer",
    },
    { 
      id: "3", 
      name: "Robert Johnson", 
      email: "robert@example.com", 
      role: "Designer",
    },
    { 
      id: "4", 
      name: "Emily Wilson", 
      email: "emily@example.com", 
      role: "Project Manager",
    },
    { 
      id: "5", 
      name: "Michael Brown", 
      email: "michael@example.com", 
      role: "Developer",
    }
  ]);

  const getInitials = (name: string) => {
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Team Members</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Invite Member
          </Button>
        </div>
        
        {/* Team Members List */}
        <Card>
          <CardHeader>
            <CardTitle>Current Team ({teamMembers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      {member.avatarUrl ? (
                        <AvatarImage src={member.avatarUrl} />
                      ) : null}
                      <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm bg-slate-100 px-2 py-1 rounded">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Team;
