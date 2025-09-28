import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  AlertTriangle,
  MapPin,
  Clock,
  Radio,
  MessageSquare,
  Phone,
  Shield,
} from "lucide-react";

const StatCard = ({ title, value, subtitle, status, icon: Icon, trend }: any) => (
  <Card className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      </div>
      <div className={`p-3 rounded-lg ${status === 'success' ? 'bg-dashboard-success/10' : 
        status === 'warning' ? 'bg-dashboard-warning/10' : 
        status === 'danger' ? 'bg-dashboard-danger/10' : 'bg-dashboard-accent/10'}`}>
        <Icon className={`h-6 w-6 ${status === 'success' ? 'text-dashboard-success' : 
          status === 'warning' ? 'text-dashboard-warning' : 
          status === 'danger' ? 'text-dashboard-danger' : 'text-dashboard-accent'}`} />
      </div>
    </div>
    {trend && (
      <Badge variant="outline" className={`mt-2 ${trend.includes('+') ? 'text-dashboard-success' : ''}`}>
        {trend}
      </Badge>
    )}
  </Card>
);

const QuickActionButton = ({ title, icon: Icon, variant, onClick }: any) => (
  <Button
    variant={variant}
    className="w-full h-14 justify-start space-x-3"
    onClick={onClick}
  >
    <Icon className="h-5 w-5" />
    <span>{title}</span>
  </Button>
);

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Real-time monitoring and control center for tourist safety management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Tourists"
          value="2,847"
          subtitle="Last updated: 2 min ago"
          status="success"
          icon={Users}
          trend="+5.2%"
        />
        <StatCard
          title="Active Alerts"
          value="12"
          subtitle="3 high priority"
          status="danger"
          icon={AlertTriangle}
        />
        <StatCard
          title="Risk Zones"
          value="7"
          subtitle="2 critical areas"
          status="warning"
          icon={MapPin}
        />
        <StatCard
          title="Avg Response Time"
          value="1.8s"
          subtitle="Target: < 2s"
          status="success"
          icon={Clock}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tourist Distribution Heatmap */}
        <Card className="col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Tourist Distribution Heatmap</h3>
            <div className="flex items-center space-x-2">
              <select className="bg-secondary border border-border rounded-md px-3 py-1 text-sm">
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
              <Button variant="outline" size="sm">
                <Shield className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Heatmap Visualization */}
          <div className="relative h-80 bg-gradient-to-br from-heatmap-low via-heatmap-medium to-heatmap-high rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Density Legend */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
              <h4 className="text-sm font-medium mb-2">Density Legend</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-heatmap-low rounded-full"></div>
                  <span className="text-xs">Low</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-heatmap-medium rounded-full"></div>
                  <span className="text-xs">Medium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-heatmap-high rounded-full"></div>
                  <span className="text-xs">High</span>
                </div>
              </div>
            </div>

            {/* Sample markers */}
            <div className="absolute top-16 left-32 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-24 right-24 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            
            {/* Location labels */}
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">Connaught Place</div>
            <div className="absolute top-8 right-8 text-white text-sm font-medium">Red Fort Area</div>
            <div className="absolute top-32 left-16 text-white text-sm font-medium">India Gate</div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <QuickActionButton
              title="Emergency Broadcast"
              icon={Radio}
              variant="destructive"
            />
            <QuickActionButton
              title="Send Area Alert"
              icon={MessageSquare}
              variant="default"
            />
            <QuickActionButton
              title="Generate e-FIR"
              icon={Shield}
              variant="secondary"
            />
            <QuickActionButton
              title="Dispatch Emergency"
              icon={Phone}
              variant="outline"
            />
          </div>

          {/* Emergency Contacts */}
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-sm font-semibold mb-3">Emergency Contacts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Police Control</span>
                <span className="font-mono">100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Medical Emergency</span>
                <span className="font-mono">108</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fire Department</span>
                <span className="font-mono">101</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tourist Helpline</span>
                <span className="font-mono">1363</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}