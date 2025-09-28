import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  Search,
  Filter,
  Plus,
  Clock,
  MapPin,
  User,
  Phone,
  Eye,
} from "lucide-react";

const AlertCard = ({ alert }: any) => (
  <Card className="p-4">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg ${
          alert.priority === 'Critical' ? 'bg-status-critical/10' :
          alert.priority === 'High' ? 'bg-status-high/10' :
          'bg-status-medium/10'
        }`}>
          <AlertTriangle className={`h-4 w-4 ${
            alert.priority === 'Critical' ? 'text-status-critical' :
            alert.priority === 'High' ? 'text-status-high' :
            'text-status-medium'
          }`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium">{alert.title}</h4>
            <Badge variant={
              alert.priority === 'Critical' ? 'destructive' :
              alert.priority === 'High' ? 'secondary' :
              'outline'
            }>
              {alert.priority}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{alert.time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>{alert.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{alert.reporter}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        {alert.priority === 'Critical' && (
          <>
            <Button size="sm" variant="destructive">
              Dispatch Emergency
            </Button>
            <Button size="sm" variant="outline">
              Contact Tourist
            </Button>
          </>
        )}
        {alert.priority === 'High' && (
          <>
            <Button size="sm" variant="default">
              Send Warning
            </Button>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </>
        )}
        {alert.priority === 'Medium' && (
          <>
            <Button size="sm" variant="secondary">
              Investigate
            </Button>
            <Button size="sm" variant="outline">
              Dismiss
            </Button>
          </>
        )}
      </div>
    </div>
  </Card>
);

export default function AlertCenter() {
  const alerts = [
    {
      id: 1,
      title: "Tourist in Distress - Panic Button Activated",
      description: "Tourist ID: TS-2024-8847 has activated panic button. Last known location: Red Fort Area, Delhi",
      priority: "Critical",
      time: "2 minutes ago",
      location: "Red Fort Area, Delhi",
      reporter: "Sarah Johnson (USA)",
    },
    {
      id: 2,
      title: "Geofence Violation - Restricted Area Entry",
      description: "Multiple tourists detected in restricted military area. Immediate evacuation required.",
      priority: "High",
      time: "5 minutes ago",
      location: "Cantonment Area, New Delhi",
      reporter: "4 tourists affected",
    },
    {
      id: 3,
      title: "AI Anomaly Detection - Unusual Behavior Pattern",
      description: "AI detected unusual movement pattern for tourist group. Possible security concern or lost tourists.",
      priority: "Medium",
      time: "12 minutes ago",
      location: "Connaught Place",
      reporter: "AI Confidence: 87%",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Alert Center</h1>
          <p className="text-muted-foreground">Real-time alerts and incident notifications</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Alert
          </Button>
        </div>
      </div>

      {/* Alert Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-status-critical/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-status-critical" />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Critical Alerts</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-status-high/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-status-high" />
            </div>
            <div>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-muted-foreground">High Priority</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-status-medium/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-status-medium" />
            </div>
            <div>
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-muted-foreground">Medium Priority</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-status-success/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-status-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">142</p>
              <p className="text-sm text-muted-foreground">Resolved Today</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search alerts..." className="pl-10" />
          </div>
          <select className="bg-secondary border border-border rounded-md px-3 py-2">
            <option>All Priorities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </Card>

      {/* Active Alerts */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Active Alerts</h2>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>
    </div>
  );
}