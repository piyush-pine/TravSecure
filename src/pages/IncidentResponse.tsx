import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Radio,
  Clock,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Truck,
  Target,
} from "lucide-react";

export default function IncidentResponse() {
  const { toast } = useToast();
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Incident Response Center</h1>
        <p className="text-muted-foreground">Coordinate emergency response and manage active incidents</p>
      </div>

      {/* Response Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-status-critical/10 rounded-lg">
              <Radio className="h-6 w-6 text-status-critical" />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Active Incidents</p>
              <p className="text-xs text-muted-foreground">2 critical, 1 medium</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-dashboard-accent/10 rounded-lg">
              <Truck className="h-6 w-6 text-dashboard-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Response Teams</p>
              <p className="text-xs text-muted-foreground">En route to incidents</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-dashboard-success/10 rounded-lg">
              <Clock className="h-6 w-6 text-dashboard-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">1.2m</p>
              <p className="text-sm text-muted-foreground">Avg Response Time</p>
              <p className="text-xs text-muted-foreground">Target: &lt; 2 minutes</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">e-FIRs Today</p>
              <p className="text-xs text-muted-foreground">8 resolved</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Active Incidents */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Active Incidents</h3>
        
        <div className="space-y-4">
          <div className="text-center text-muted-foreground py-8">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-dashboard-success" />
            <p className="text-lg font-medium">No Active Incidents</p>
            <p className="text-sm">All incidents have been resolved or are being monitored</p>
          </div>
        </div>
      </Card>
    </div>
  );
}