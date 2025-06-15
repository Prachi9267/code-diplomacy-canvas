
import { BrainCircuit, Code, Braces, Wand2, FileCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { icon: Code, name: 'HTML & CSS', description: 'Crafting responsive and beautiful web layouts.' },
  { icon: Braces, name: 'JavaScript', description: 'Building interactive and dynamic user experiences.' },
  { icon: FileCode, name: 'Python', description: 'Leveraging its power for scripting and AI experiments.' },
  { icon: BrainCircuit, name: 'Data Structures', description: 'Understanding the fundamentals of efficient algorithms.' },
  { icon: Wand2, name: 'Artificial Intelligence', description: 'Exploring machine learning concepts and applications.' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">My Skillset</h2>
          <p className="text-muted-foreground mt-2">Technologies and concepts I'm familiar with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
