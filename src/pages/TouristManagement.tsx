import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Search,
  Download,
  Eye,
  MessageSquare,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";

const TouristRow = ({ tourist }: any) => (
  <tr className="border-b border-border hover:bg-muted/50">
    <td className="p-4">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
          {tourist.id}
        </div>
        <span className="font-mono text-sm">{tourist.fullId}</span>
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center space-x-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={tourist.avatar} />
          <AvatarFallback>{tourist.initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{tourist.name}</div>
          <div className="text-sm text-muted-foreground">Age: {tourist.age}</div>
        </div>
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center space-x-2">
        <img src={`https://flagcdn.com/w20/${tourist.flagCode}.png`} alt="" className="w-5 h-3" />
        <span>{tourist.nationality}</span>
      </div>
    </td>
    <td className="p-4">
      <div>
        <div className="font-medium">{tourist.location}</div>
        <div className="text-sm text-muted-foreground">Updated {tourist.lastUpdate}</div>
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center space-x-2">
        <div className="w-16 bg-secondary rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${tourist.safetyScore >= 80 ? 'bg-status-safe' : tourist.safetyScore >= 60 ? 'bg-status-medium' : 'bg-status-critical'}`}
            style={{ width: `${tourist.safetyScore}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium">{tourist.safetyScore}</span>
      </div>
    </td>
    <td className="p-4">
      <Badge variant={tourist.status === 'Active' ? 'default' : tourist.status === 'Caution' ? 'secondary' : 'outline'}>
        {tourist.status}
      </Badge>
    </td>
    <td className="p-4">
      <div className="flex space-x-1">
        <Button size="sm" variant="ghost">
          <Eye className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="ghost">
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="ghost">
          <MapPin className="h-4 w-4" />
        </Button>
      </div>
    </td>
  </tr>
);

export default function TouristManagement() {
  const tourists = [
    {
      id: "TS",
      fullId: "TS-2024-8847",
      name: "Sarah Johnson",
      age: 28,
      nationality: "USA",
      flagCode: "us",
      location: "Red Fort Area",
      lastUpdate: "2 min ago",
      safetyScore: 85,
      status: "Active",
      avatar: "/api/placeholder/32/32",
      initials: "SJ",
    },
    {
      id: "TS",
      fullId: "TS-2024-8846",
      name: "James Wilson",
      age: 35,
      nationality: "UK",
      flagCode: "gb",
      location: "India Gate",
      lastUpdate: "5 min ago",
      safetyScore: 92,
      status: "Active",
      avatar: "/api/placeholder/32/32",
      initials: "JW",
    },
    {
      id: "TS",
      fullId: "TS-2024-8845",
      name: "Maria Garcia",
      age: 31,
      nationality: "Spain",
      flagCode: "es",
      location: "Lotus Temple",
      lastUpdate: "8 min ago",
      safetyScore: 68,
      status: "Caution",
      avatar: "/api/placeholder/32/32",
      initials: "MG",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Tourist ID Management</h1>
        <p className="text-muted-foreground">Manage and monitor registered tourists with blockchain-secured digital IDs</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-dashboard-accent/10 rounded-lg">
              <Users className="h-6 w-6 text-dashboard-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">2,847</p>
              <p className="text-sm text-muted-foreground">Registered Tourists</p>
              <p className="text-xs text-dashboard-success">+127 today</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-dashboard-success/10 rounded-lg">
              <CheckCircle className="h-6 w-6 text-dashboard-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">2,731</p>
              <p className="text-sm text-muted-foreground">Verified IDs</p>
              <p className="text-xs text-muted-foreground">95.9% verification rate</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-dashboard-warning/10 rounded-lg">
              <Clock className="h-6 w-6 text-dashboard-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold">116</p>
              <p className="text-sm text-muted-foreground">Pending Verification</p>
              <p className="text-xs text-muted-foreground">Avg. 2.3 hours</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Blockchain Secured</p>
              <p className="text-xs text-muted-foreground">Zero tampering detected</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tourist Database */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Tourist Database</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by ID, name, or nationality..." className="pl-10 w-80" />
            </div>
            <select className="bg-secondary border border-border rounded-md px-3 py-2">
              <option>All Status</option>
              <option>Active</option>
              <option>Caution</option>
              <option>Inactive</option>
            </select>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-medium">Tourist ID</th>
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Nationality</th>
                <th className="text-left p-4 font-medium">Current Location</th>
                <th className="text-left p-4 font-medium">Safety Score</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tourists.map((tourist, index) => (
                <TouristRow key={index} tourist={tourist} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Showing 1 to 10 of 2,847 tourists
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}