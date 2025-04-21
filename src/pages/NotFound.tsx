
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-slate-50">
      <div className="text-center max-w-md px-4">
        <div className="rounded-full bg-red-50 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-10 w-10 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold mb-2 gradient-text">404</h1>
        <p className="text-xl text-slate-600 mb-6">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you're looking for. It might have been removed or doesn't exist.
        </p>
        <Button className="bg-gradient-to-r from-brand-600 to-blue-500 hover:opacity-90 btn-glow border-0">
          <Home className="mr-2 h-4 w-4" />
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
