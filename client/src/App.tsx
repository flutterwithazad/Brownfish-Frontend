import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import MobileDevelopment from "@/pages/services/mobile-development";
import WebApplications from "@/pages/services/web-applications";
import BackendArchitecture from "@/pages/services/backend-architecture";
import MVPDevelopment from "@/pages/services/mvp-development";
import { useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/mobile-development" component={MobileDevelopment} />
        <Route path="/services/web-applications" component={WebApplications} />
        <Route path="/services/backend-architecture" component={BackendArchitecture} />
        <Route path="/services/mvp-development" component={MVPDevelopment} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
