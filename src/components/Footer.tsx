import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Built with <Heart className="text-primary fill-primary" size={16} /> by Komal Pachouri
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 All rights reserved.
            </p>
          </div>

          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="rounded-full border-primary/50 hover:bg-primary/10"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
