import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import AlertCenter from "./pages/AlertCenter";
import RiskZoneAnalysis from "./pages/RiskZoneAnalysis";
import TouristManagement from "./pages/TouristManagement";
import AIAnalytics from "./pages/AIAnalytics";
import GeofencingControl from "./pages/GeofencingControl";
import IncidentResponse from "./pages/IncidentResponse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="alerts" element={<AlertCenter />} />
            <Route path="risk-zones" element={<RiskZoneAnalysis />} />
            <Route path="tourist-management" element={<TouristManagement />} />
            <Route path="ai-analytics" element={<AIAnalytics />} />
            <Route path="geofencing" element={<GeofencingControl />} />
            <Route path="incident-response" element={<IncidentResponse />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
