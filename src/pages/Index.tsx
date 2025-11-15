import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [topic, setTopic] = useState('');
  const [wordCount, setWordCount] = useState('500');
  const [academicStyle, setAcademicStyle] = useState('APA');
  const [generatedEssay, setGeneratedEssay] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockEssay = `# ${topic || 'Academic Essay'}\n\n## Introduction\n\nThis essay explores the fundamental concepts and methodologies surrounding ${topic || 'the chosen topic'}. Through rigorous analysis and evidence-based reasoning, we examine the key perspectives that shape our understanding of this subject.\n\n## Main Body\n\nAccording to Smith (2023), the primary framework for analyzing this topic requires a multidisciplinary approach. Recent studies have demonstrated that "${topic || 'this area'} represents a significant area of academic inquiry" (Johnson & Lee, 2024, p. 45).\n\nFurthermore, the implications of these findings extend beyond theoretical considerations. As noted by Williams et al. (2023), practical applications in this domain have shown promising results in various contexts.\n\n## Conclusion\n\nIn conclusion, the examination of ${topic || 'this topic'} reveals the complexity inherent in contemporary academic discourse. Future research should continue to explore these dimensions to advance our collective understanding.\n\n## References\n\nJohnson, A., & Lee, B. (2024). *Contemporary Perspectives in Academic Research*. University Press.\n\nSmith, C. (2023). Methodological Frameworks for Analysis. *Journal of Academic Studies*, 15(3), 234-256.\n\nWilliams, D., Brown, E., & Davis, F. (2023). Practical Applications in Modern Scholarship. *Review of Educational Research*, 28(2), 112-130.`;
      
      setGeneratedEssay(mockEssay);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl">AcademicAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              <Icon name="FileText" size={16} className="mr-2" />
              Features
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              <Icon name="Book" size={16} className="mr-2" />
              Resources
            </Button>
            <Button>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            AI-Powered Academic Writing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Generate Academic Essays
            <span className="block text-primary mt-2">In Seconds</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional AI tool for creating academic texts with automatic citation formatting and bibliography generation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base">
              <Icon name="Rocket" size={18} className="mr-2" />
              Start Writing
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              <Icon name="Play" size={18} className="mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: 'Brain', title: 'AI-Powered', desc: 'Advanced language models trained on academic standards' },
            { icon: 'BookOpen', title: 'Auto Citations', desc: 'Automatic formatting in APA, MLA, Chicago styles' },
            { icon: 'CheckCircle', title: 'Quality Assured', desc: 'Verified academic writing structures and formats' }
          ].map((feature, idx) => (
            <Card key={idx} className="border-2 hover:border-primary/50 transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="generator" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="generator">
                <Icon name="Wand2" size={16} className="mr-2" />
                Generator
              </TabsTrigger>
              <TabsTrigger value="preview">
                <Icon name="Eye" size={16} className="mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="generator" className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Settings" size={20} />
                    Essay Parameters
                  </CardTitle>
                  <CardDescription>
                    Configure your essay requirements and let AI do the rest
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="topic">Essay Topic</Label>
                    <Input
                      id="topic"
                      placeholder="e.g., The Impact of Artificial Intelligence on Modern Education"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="text-base"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="wordCount">Word Count</Label>
                      <Select value={wordCount} onValueChange={setWordCount}>
                        <SelectTrigger id="wordCount">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="250">250 words</SelectItem>
                          <SelectItem value="500">500 words</SelectItem>
                          <SelectItem value="1000">1000 words</SelectItem>
                          <SelectItem value="1500">1500 words</SelectItem>
                          <SelectItem value="2000">2000 words</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="style">Citation Style</Label>
                      <Select value={academicStyle} onValueChange={setAcademicStyle}>
                        <SelectTrigger id="style">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="APA">APA 7th Edition</SelectItem>
                          <SelectItem value="MLA">MLA 9th Edition</SelectItem>
                          <SelectItem value="Chicago">Chicago Style</SelectItem>
                          <SelectItem value="Harvard">Harvard Style</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    className="w-full text-base py-6" 
                    size="lg"
                    onClick={handleGenerate}
                    disabled={isGenerating || !topic}
                  >
                    {isGenerating ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Generating Essay...
                      </>
                    ) : (
                      <>
                        <Icon name="Sparkles" size={20} className="mr-2" />
                        Generate Academic Essay
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Icon name="FileText" size={20} />
                      Generated Essay
                    </span>
                    {generatedEssay && (
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={16} className="mr-2" />
                        Export
                      </Button>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {generatedEssay ? `Formatted in ${academicStyle} style with automatic citations` : 'Your generated essay will appear here'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {generatedEssay ? (
                    <div className="prose prose-sm max-w-none bg-gray-50 p-6 rounded-lg">
                      <Textarea
                        value={generatedEssay}
                        onChange={(e) => setGeneratedEssay(e.target.value)}
                        className="min-h-[500px] font-mono text-sm bg-white"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
                      <Icon name="FileQuestion" size={48} className="mb-4 opacity-50" />
                      <p className="text-lg">No essay generated yet</p>
                      <p className="text-sm">Switch to Generator tab to create your essay</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-primary text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Writing?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students and researchers using AI to accelerate their academic work
          </p>
          <Button size="lg" variant="secondary" className="text-base">
            <Icon name="Zap" size={18} className="mr-2" />
            Get Started Free
          </Button>
        </div>
      </section>

      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 AcademicAI. Powered by advanced AI technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
