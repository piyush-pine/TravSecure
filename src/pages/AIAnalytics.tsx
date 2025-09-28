import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Activity,
  Settings,
  RefreshCw,
  Target,
  Eye,
  MessageSquare,
  Phone,
} from "lucide-react";

const AnomalyLogItem = ({ anomaly }: any) => {
  const { toast } = useToast();
  <Card className="p-4">
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg ${
          anomaly.severity === 'Critical' ? 'bg-status-critical/10' :
          anomaly.severity === 'High' ? 'bg-status-high/10' :
          'bg-status-medium/10'
        }`}>
          <AlertTriangle className={`h-4 w-4 ${
            anomaly.severity === 'Critical' ? 'text-status-critical' :
            anomaly.severity === 'High' ? 'text-status-high' :
            'text-status-medium'
          }`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium">{anomaly.title}</h4>
            <Badge variant={
              anomaly.severity === 'Critical' ? 'destructive' :
              anomaly.severity === 'High' ? 'secondary' :
              'outline'
            }>
              {anomaly.severity}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{anomaly.description}</p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span>{anomaly.time}</span>
            <span>Confidence: {anomaly.confidence}</span>
            <span>{anomaly.location}</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        {anomaly.severity === 'Critical' && (
          <Button size="sm" variant="destructive" onClick={() => toast({
            title: "AI Investigation Tools",
            description: "Advanced AI investigation interface will be implemented. This will provide detailed analysis, evidence collection, and automated response recommendations.",
            duration: 4000,
          })}>
            Investigate
          </Button>
        )}
        {anomaly.severity === 'High' && (
          <Button size="sm" variant="default" onClick={() => toast({
            title: "AI Monitoring Dashboard",
            description: "Enhanced AI monitoring tools will be added. This will provide continuous tracking and predictive analysis for potential incidents.",
            duration: 4000,
          })}>
            Monitor
          </Button>
        )}
        {anomaly.severity === 'Medium' && (
          <Button size="sm" variant="secondary" onClick={() => toast({
            title: "Smart Tourist Communication",
            description: "AI-assisted communication system will be implemented. This will provide context-aware messaging and automated safety recommendations.",
            duration: 4000,
          })}>
            Contact Tourist
          </Button>
        )}
        <Button size="sm" variant="outline" onClick={() => toast({
          title: "AI Learning System",
          description: "Machine learning feedback system will be added. This will improve AI accuracy through false positive reporting and pattern validation.",
          duration: 4000,
        })}>
          {anomaly.severity === 'Critical' ? 'False Positive' : 
           anomaly.severity === 'High' ? 'Dismiss' : 'Review Later'}
        </Button>
      </div>
    </div>
  </Card>
);

export default function AIAnalytics() {
  const { toast } = useToast();
  const anomalies = [
    {
      title: "Suspicious Movement Pattern Detected",
      description: "Tourist TS-2024-8847 showing erratic movement pattern inconsistent with normal tourist behavior. Possible distress or coercion.",
      severity: "Critical",
      time: "3 minutes ago",
      confidence: "91%",
      location: "Old Delhi Area",
    },
    {
      title: "Crowd Density Anomaly",
      description: "Unusual tourist concentration detected in non-tourist area. Possible event or incident requiring attention.",
      severity: "High",
      time: "8 minutes ago",
      confidence: "78%",
      location: "14 tourists affected",
    },
    {
      title: "Communication Pattern Analysis",
      description: "Tourist showing signs of communication distress based on app usage patterns and emergency contact attempts.",
      severity: "Medium",
      time: "15 minutes ago",
      confidence: "68%",
      location: "Multiple failed calls",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Behavior Analytics</h1>
          <p className="text-muted-foreground">Advanced AI-powered behavior analysis and anomaly detection system</p>
        </div>
        <Button variant="outline" onClick={() => toast({
          title: "AI Configuration Panel",
          description: "Advanced AI settings interface will be implemented. This will allow fine-tuning detection algorithms, confidence thresholds, and alert parameters.",
          duration: 4000,
        })}>
          <Settings className="h-4 w-4 mr-2" />
          AI Settings
        </Button>
      </div>

      {/* AI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">847</p>
              <p className="text-sm text-muted-foreground">Patterns Analyzed</p>
              <p className="text-xs text-muted-foreground">Last hour</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-status-critical/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-status-critical" />
            </div>
            <div>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-muted-foreground">Anomalies Detected</p>
              <p className="text-xs text-muted-foreground">3 requiring action</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-dashboard-accent/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-dashboard-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">94.7%</p>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              <p className="text-xs text-dashboard-success">+2.1% this week</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-dashboard-success/10 rounded-lg">
              <Target className="h-6 w-6 text-dashboard-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">23</p>
              <p className="text-sm text-muted-foreground">Incidents Prevented</p>
              <p className="text-xs text-muted-foreground">This week</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Behavior Pattern Analysis */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Behavior Pattern Analysis</h3>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-lg border border-border flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Activity className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Real-time behavior analysis visualization</p>
              <p className="text-xs">Currently tracking movement patterns</p>
            </div>
          </div>
        </Card>

        {/* Anomaly Detection Timeline */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Anomaly Detection Timeline</h3>
            <select className="bg-secondary border border-border rounded-md px-3 py-1 text-sm">
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-background via-muted/20 to-background rounded-lg border border-border flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Anomaly detection timeline</p>
              <p className="text-xs">Showing detection patterns over time</p>
            </div>
          </div>
        </Card>
      </div>

      {/* AI Anomaly Log */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">AI Anomaly Log</h2>
          <div className="flex items-center space-x-2">
            <select className="bg-secondary border border-border rounded-md px-3 py-1 text-sm">
              <option>All Severity</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
            </select>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              AI Settings
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {anomalies.map((anomaly, index) => (
            <AnomalyLogItem key={index} anomaly={anomaly} />
          ))}
        </div>
      </div>
    </div>
  );
}