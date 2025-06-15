import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // height of the header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };
    
    return (
        <section id="about" className="pt-32 relative overflow-hidden min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-background to-secondary/15 bg-[length:200%_200%] animate-background-pan"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Avatar className="w-48 h-48 md:w-60 md:h-60 border-4 border-primary/20 shadow-lg">
                            <AvatarImage src="/lovable-uploads/a597d684-6262-4226-872d-b3e5e77f3b8b.png" alt="Prachi" />
                            <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-foreground mb-4">
                            Hi, I'm Prachi
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8">
                            A second-year Computer Science and AI student at <span className="text-primary font-semibold">Indira Gandhi Delhi Technical University For Women, Delhi</span>. I'm passionate about building impactful technology and currently exploring web development, DSA, and Python.
                        </p>
                        <div className="flex justify-center md:justify-start items-center gap-4 mb-8">
                            <Button onClick={() => scrollToSection('projects')}>View My Work</Button>
                            <Button variant="outline" onClick={() => scrollToSection('contact')}>Get In Touch</Button>
                        </div>
                        <div className="flex justify-center md:justify-start items-center gap-6">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative block w-full h-[120px]">
                    <path fill="hsl(var(--background))" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,169,1392,146.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
