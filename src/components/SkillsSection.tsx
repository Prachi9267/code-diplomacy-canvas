
import { BrainCircuit, Code, Braces, FileCode, Binary } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { icon: Code, name: 'HTML & CSS' },
  { icon: Braces, name: 'JavaScript' },
  { icon: FileCode, name: 'Python' },
  { icon: BrainCircuit, name: 'Data Structures' },
  { icon: Binary, name: 'C++' },
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
            <Card key={index} className="bg-card/50 backdrop-blur-md border border-border/50 transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/80 hover:shadow-glow animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{skill.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
