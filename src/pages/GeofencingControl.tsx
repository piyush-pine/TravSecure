import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Plus,
  MapPin,
  AlertTriangle,
  Clock,
  Users,
  Settings,
  Edit,
} from "lucide-react";

const GeofenceItem = ({ geofence }: any) => (
  <Card className="p-4">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg ${
          geofence.type === 'Restricted Zone' ? 'bg-status-critical/10' :
          geofence.type === 'Caution Zone' ? 'bg-status-warning/10' :
          geofence.type === 'Safe Zone' ? 'bg-status-safe/10' :
          'bg-dashboard-accent/10'
        }`}>
          <Shield className={`h-4 w-4 ${
            geofence.type === 'Restricted Zone' ? 'text-status-critical' :
            geofence.type === 'Caution Zone' ? 'text-status-warning' :
            geofence.type === 'Safe Zone' ? 'text-status-safe' :
            'text-dashboard-accent'
          }`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium">{geofence.name}</h4>
            <Badge variant={
              geofence.type === 'Restricted Zone' ? 'destructive' :
              geofence.type === 'Caution Zone' ? 'secondary' :
              geofence.type === 'Safe Zone' ? 'default' :
              'outline'
            }>
              {geofence.level}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{geofence.description}</p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>{geofence.coordinates}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>{geofence.radius}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3" />
              <span>{geofence.tourists}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        {geofence.type === 'Restricted Zone' && (
          <Button size="sm" variant="destructive">
            {geofence.level}
          </Button>
        )}
        {geofence.type === 'Caution Zone' && (
          <Button size="sm" variant="default">
            {geofence.level}
          </Button>
        )}
        {geofence.type === 'Safe Zone' && (
          <Button size="sm" variant="secondary">
            {geofence.level}
          </Button>
        )}
        <Button size="sm" variant="outline">
          <Edit className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </Card>
);

export default function GeofencingControl() {
  const geofences = [
    {
      name: "Military Cantonment Area",
      description: "Restricted military zone - No civilian access",
      type: "Restricted Zone",
      level: "Critical",
      coordinates: "28.619°N, 77.209°E",
      radius: "2.5 km radius",
      tourists: "0 tourists inside",
    },
    {
      name: "Old Delhi Railway Station",
      description: "High crime area - Enhanced monitoring required",
      type: "Caution Zone",
      level: "Caution",
      coordinates: "28.656°N, 77.241°E",
      radius: "1 km radius",
      tourists: "23 tourists inside",
    },
    {
      name: "India Gate Tourist Zone",
      description: "Safe tourist area with security presence",
      type: "Safe Zone",
      level: "Safe",
      coordinates: "28.612°N, 77.229°E",
      radius: "3 km radius",
      tourists: "497 tourists inside",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Geofencing Control Center</h1>
          <p className="text-muted-foreground">Manage virtual boundaries and automated alert systems for tourist safety</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Geofence
        </Button>
      </div>

      {/* Geofence Map and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Geofence Map */}
        <Card className="col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Geofence Map</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Geofence
            </Button>
          </div>
          
          {/* Map Visualization */}
          <div className="relative h-80 bg-gradient-to-br from-blue-900/20 via-green-500/30 to-red-500/40 rounded-lg overflow-hidden border">
            {/* Geofence Types Legend */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 z-10">
              <h4 className="text-sm font-medium mb-2">Geofence Types</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-critical rounded-full"></div>
                  <span className="text-xs">Restricted Zone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-warning rounded-full"></div>
                  <span className="text-xs">Caution Zone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-status-safe rounded-full"></div>
                  <span className="text-xs">Safe Zone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-dashboard-accent rounded-full"></div>
                  <span className="text-xs">Tourist Area</span>
                </div>
              </div>
            </div>

            {/* Geofence areas */}
            <div className="absolute top-20 left-32 w-16 h-16 border-2 border-status-critical rounded-full bg-status-critical/20"></div>
            <div className="absolute bottom-32 right-24 w-20 h-20 border-2 border-status-warning rounded-full bg-status-warning/20"></div>
            <div className="absolute top-32 right-32 w-24 h-24 border-2 border-status-safe rounded-full bg-status-safe/20"></div>
            
            {/* Zone markers */}
            <div className="absolute top-28 left-40 p-1 bg-status-critical rounded-full">
              <MapPin className="h-3 w-3 text-white" />
            </div>
            <div className="absolute bottom-40 right-32 p-1 bg-status-warning rounded-full">
              <MapPin className="h-3 w-3 text-white" />
            </div>
            <div className="absolute top-40 right-40 p-1 bg-status-safe rounded-full">
              <MapPin className="h-3 w-3 text-white" />
            </div>
            
            {/* Area labels */}
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
              Military Cantonment
            </div>
            <div className="absolute top-8 right-8 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
              Railway Station
            </div>
            <div className="absolute bottom-16 right-4 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
              India Gate Zone
            </div>
          </div>
        </Card>

        {/* Geofence Statistics */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Geofence Statistics</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Active Geofences</span>
                <span className="text-sm font-bold">47</span>
              </div>
              <div className="text-xs text-muted-foreground">12 restricted, 35 monitoring</div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Violations Today</span>
                <span className="text-sm font-bold text-status-critical">8</span>
              </div>
              <div className="text-xs text-muted-foreground">3 critical, 5 warnings</div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Tourists Monitored</span>
                <span className="text-sm font-bold text-dashboard-accent">2,847</span>
              </div>
              <div className="text-xs text-muted-foreground">Real-time tracking</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <h4 className="text-sm font-semibold mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <Button variant="destructive" size="sm" className="w-full">
                Emergency Lockdown
              </Button>
              <Button variant="default" size="sm" className="w-full">
                Mass Evacuation Alert
              </Button>
              <Button variant="secondary" size="sm" className="w-full">
                Update Safe Zones
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Geofence Management */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Geofence Management</h2>
          <div className="flex items-center space-x-2">
            <select className="bg-secondary border border-border rounded-md px-3 py-1 text-sm">
              <option>All Zones</option>
              <option>Restricted</option>
              <option>Caution</option>
              <option>Safe</option>
            </select>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Geofence
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {geofences.map((geofence, index) => (
            <GeofenceItem key={index} geofence={geofence} />
          ))}
        </div>
      </div>
    </div>
  );
}