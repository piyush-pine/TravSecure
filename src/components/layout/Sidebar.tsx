import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  AlertTriangle,
  MapPin,
  Users,
  Brain,
  Shield,
  Radio,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Alert Center",
    href: "/alerts",
    icon: AlertTriangle,
    badge: "3",
  },
  {
    title: "Risk Zone Analysis",
    href: "/risk-zones",
    icon: MapPin,
  },
  {
    title: "Tourist ID Management",
    href: "/tourist-management",
    icon: Users,
  },
  {
    title: "AI Behavior Analytics",
    href: "/ai-analytics",
    icon: Brain,
  },
  {
    title: "Geofencing Control",
    href: "/geofencing",
    icon: Shield,
  },
  {
    title: "Incident Response",
    href: "/incident-response",
    icon: Radio,
  },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "h-full bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-lg font-bold text-sidebar-foreground">TravSecure</h1>
                <p className="text-xs text-muted-foreground">Authority Dashboard</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-md hover:bg-sidebar-accent text-sidebar-foreground"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Live Status */}
      <div className="p-4 border-b border-sidebar-border">
        {!isCollapsed ? (
          <div>
            <h3 className="text-sm font-semibold text-sidebar-foreground mb-2">Live Status</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Active Tourists</span>
                <span className="text-sidebar-foreground font-mono">2,847</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Active Alerts</span>
                <span className="text-status-critical font-mono">12</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-1">
            <div className="w-2 h-2 bg-dashboard-success rounded-full animate-pulse"></div>
            <span className="text-xs text-sidebar-foreground">2.8K</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="flex-1">{item.title}</span>
                    {item.badge && (
                      <span className="bg-status-critical text-white text-xs px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Emergency Actions */}
      <div className="p-4 border-t border-sidebar-border">
        {!isCollapsed ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-sidebar-foreground mb-2">Emergency Actions</h3>
            <button className="w-full bg-status-critical hover:bg-status-critical/90 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Emergency Broadcast
            </button>
            <button className="w-full bg-status-warning hover:bg-status-warning/90 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Mass Alert System
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-2">
            <button className="p-2 bg-status-critical hover:bg-status-critical/90 text-white rounded-md">
              <Radio className="h-4 w-4" />
            </button>
            <button className="p-2 bg-status-warning hover:bg-status-warning/90 text-white rounded-md">
              <AlertTriangle className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* System Health */}
      <div className="p-4 border-t border-sidebar-border">
        {!isCollapsed ? (
          <div>
            <h3 className="text-sm font-semibold text-sidebar-foreground mb-2">System Health</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">GPS Accuracy</span>
                <span className="text-dashboard-success">98.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network Coverage</span>
                <span className="text-dashboard-success">99.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Response Time</span>
                <span className="text-dashboard-success">&lt; 2s</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-dashboard-success rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};