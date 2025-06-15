import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' },
  { title: 'Interests', id: 'interests' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of the header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-card/80 backdrop-blur-sm border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'});}} className="text-2xl font-display font-bold text-primary">
            Prachi
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-sans text-foreground/80 hover:text-primary transition-colors"
              >
                {link.title}
              </button>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-center py-2 font-sans text-foreground/80 hover:text-primary hover:bg-secondary transition-colors rounded-md"
              >
                {link.title}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="w-full mt-2">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
