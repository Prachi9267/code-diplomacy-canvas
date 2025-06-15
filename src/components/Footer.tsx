
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Let's Connect!</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex justify-center items-center gap-6 mb-8">
            <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-sans">your.email@example.com</span>
            </a>
        </div>
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
