
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}[] = [
  {
    title: 'Amazon Clone',
    description: 'A feature-rich clone of the Amazon e-commerce platform, focusing on front-end replication and core functionalities.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Personal Website v1',
    description: 'My first personal website, designed and built from scratch to showcase my journey into web development.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    githubLink: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">A glimpse into what I've been building.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background border border-border/50 overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-display text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="mt-auto flex justify-end gap-4">
                  {project.githubLink && (
                    <Button variant="outline" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button asChild>
                     <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
