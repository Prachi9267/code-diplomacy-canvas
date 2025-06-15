import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-transparent border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Let's Connect!</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex justify-center items-center gap-6 mb-8">
            <a href="mailto:prachi.gupta9267@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-sans">prachi.gupta9267@gmail.com</span>
            </a>
        </div>
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
