
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

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
        <section id="about" className="pt-32 pb-20 text-center relative overflow-hidden min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-foreground mb-4">
                        Hi, I'm a CS Student
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        A second-year Computer Science and AI student passionate about building impactful technology. Currently exploring web development, DSA, and Python.
                    </p>
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <Button onClick={() => scrollToSection('projects')}>View My Work</Button>
                        <Button variant="outline" onClick={() => scrollToSection('contact')}>Get In Touch</Button>
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
