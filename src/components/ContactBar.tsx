import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBusiness } from "@/hooks/useBusiness";

const ContactBar = () => {
  const { phone, facebookUrl, name } = useBusiness();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-cleaning-border shadow-sm md:hidden" style={{ backgroundColor: '#eae6e8' }}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <img 
            src="/C logo.webp" 
            alt="C Logo"
            className="h-8 w-auto"
          />
          <span className="text-sm font-medium text-cleaning-text">
            {name}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(`tel:${phone}`)}
            className="flex items-center gap-1"
          >
            <Phone className="h-4 w-4" />
            Call
          </Button>
          <Button
            size="sm"
            onClick={() => window.open(facebookUrl, '_blank')}
            className="flex items-center gap-1 bg-cleaning-primary hover:bg-cleaning-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactBar; 