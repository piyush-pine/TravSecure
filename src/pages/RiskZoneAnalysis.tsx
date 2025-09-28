import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, AlertTriangle, TrendingUp, RefreshCw } from "lucide-react";

const RiskZoneCard = ({ zone }: any) => (
  <Card className="p-4">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${
          zone.level === 'Critical' ? 'bg-status-critical/10' :
          zone.level === 'High' ? 'bg-status-high/10' :
          zone.level === 'Medium' ? 'bg-status-medium/10' :
          'bg-status-success/10'
        }`}>
          <AlertTriangle className={`h-4 w-4 ${
            zone.level === 'Critical' ? 'text-status-critical' :
            zone.level === 'High' ? 'text-status-high' :
            zone.level === 'Medium' ? 'text-status-medium' :
            'text-status-success'
          }`} />
        </div>
        <div>
          <h4 className="font-medium">{zone.name}</h4>
          <p className="text-sm text-muted-foreground">{zone.description}</p>
        </div>
      </div>
      <Badge variant={
        zone.level === 'Critical' ? 'destructive' :
        zone.level === 'High' ? 'secondary' :
        zone.level === 'Medium' ? 'outline' :
        'default'
      }>
        {zone.level}
      </Badge>
    </div>
    
    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
      <div className="flex items-center space-x-1">
        <MapPin className="h-3 w-3" />
        <span>{zone.coordinates}</span>
      </div>
      <div className="flex items-center space-x-1">
        <span>{zone.radius}</span>
      </div>
      <div className="flex items-center space-x-1">
        <span>{zone.tourists}</span>
      </div>
    </div>

    <div className="text-xs text-muted-foreground mb-3">
      Risk elevated {zone.updated}
    </div>

    <div className="flex space-x-2">
      {zone.level === 'Critical' && (
        <Button size="sm" variant="destructive">
          Send Area Alert
        </Button>
      )}
      {zone.level === 'High' && (
        <Button size="sm" variant="default">
          Monitor Closely
        </Button>
      )}
      <Button size="sm" variant="outline">
        View {zone.level === 'Critical' ? 'History' : 'Details'}
      </Button>
    </div>
  </Card>
);

export default function RiskZoneAnalysis() {
  const riskZones = [
    {
      name: "Old Delhi Railway Station Area",
      description: "High crime rate, pickpocketing incidents, and overcrowding issues. 24 incidents reported in last 30 days.",
      level: "Critical",
      coordinates: "28.6562°N, 77.2410°E",
      radius: "2.5 km radius",
      tourists: "47 tourists currently in area",
      updated: "6 hours ago",
    },
    {
      name: "Karol Bagh Market",
      description: "Crowded market area with reports of overcharging tourists and minor scams. Traffic congestion.",
      level: "High",
      coordinates: "28.6519°N, 77.1910°E",
      radius: "1 km radius",
      tourists: "23 tourists currently in area",
      updated: "2 hours ago",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Risk Zone Analysis</h1>
        <p className="text-muted-foreground">Monitor and analyze high-risk areas for tourist safety</p>
      </div>

      {/* Risk Visualization and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Zone Visualization */}
        <Card className="col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Risk Zone Visualization</h3>
            <div className="flex items-center space-x-2">
              <select className="bg-secondary border border-border rounded-md px-3 py-1 text-sm">
                <option>All Risk Levels</option>
                <option>Critical Only</option>
                <option>High Risk</option>
              </select>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Map Visualization */}
          <div className="relative h-80 bg-gradient-to-br from-blue-900/20 via-yellow-500/30 to-red-500/40 rounded-lg overflow-hidden border">
            {/* Risk Levels Legend */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 z-10">
              <h4 className="text-sm font-medium mb-2">Risk Levels</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-critical rounded-full"></div>
                  <span className="text-xs">Critical Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-high rounded-full"></div>
                  <span className="text-xs">High Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-medium rounded-full"></div>
                  <span className="text-xs">Medium Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-safe rounded-full"></div>
                  <span className="text-xs">Safe Zone</span>
                </div>
              </div>
            </div>

            {/* Zone markers */}
            <div className="absolute top-20 left-32 p-2 bg-status-critical rounded-full">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute bottom-32 right-24 p-2 bg-status-high rounded-full">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-32 right-32 p-2 bg-status-medium rounded-full">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            
            {/* Area labels */}
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
              Old Delhi Railway Station
            </div>
            <div className="absolute top-8 right-8 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
              Karol Bagh Market
            </div>
          </div>
        </Card>

        {/* Risk Statistics */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Risk Statistics</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Critical Zones</span>
                <span className="text-sm font-bold text-status-critical">2</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">High Risk Zones</span>
                <span className="text-sm font-bold text-status-high">5</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Medium Risk Zones</span>
                <span className="text-sm font-bold text-status-medium">8</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Safe Zones</span>
                <span className="text-sm font-bold text-status-safe">25</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <h4 className="text-sm font-semibold mb-3">Recent Risk Changes</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 text-status-critical" />
                <span className="text-muted-foreground">Chandni Chowk</span>
                <Badge variant="destructive" className="text-xs">High</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 text-status-success" />
                <span className="text-muted-foreground">India Gate</span>
                <Badge variant="default" className="text-xs">Safe</Badge>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 text-status-medium" />
                <span className="text-muted-foreground">CP Metro Station</span>
                <Badge variant="outline" className="text-xs">Medium</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Risk Zone Details */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Risk Zone Details</h2>
        <div className="space-y-4">
          {riskZones.map((zone, index) => (
            <RiskZoneCard key={index} zone={zone} />
          ))}
        </div>
      </div>
    </div>
  );
}