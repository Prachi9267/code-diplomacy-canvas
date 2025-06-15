
import { Scale } from 'lucide-react';

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Beyond the Code</h2>
          <p className="text-muted-foreground mt-2">My passion for problem-solving extends to other areas.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg border border-border/50 flex items-start gap-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold mb-2">Model United Nations (MUN)</h3>
            <p className="text-muted-foreground">
              I'm an avid participant in MUN conferences, where I enjoy debating global issues, drafting resolutions, and engaging in diplomacy. It's a fantastic way to develop critical thinking, public speaking, and collaboration skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
