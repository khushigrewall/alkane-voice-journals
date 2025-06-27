
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Archive, Heart, Star, Calendar, Search, Sparkles } from 'lucide-react';

const MemoryVaultSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const memories = [
    {
      id: 1,
      title: "First Day at New Job",
      date: "2024-01-15",
      category: "milestone",
      emotion: "excited",
      preview: "Today marked the beginning of a new chapter in my career...",
      tags: ["career", "growth", "new beginnings"],
      color: "from-secondary to-accent"
    },
    {
      id: 2,
      title: "Sunday Morning Coffee",
      date: "2024-01-14",
      category: "daily",
      emotion: "peaceful",
      preview: "The perfect quiet morning with just me, my coffee, and my thoughts...",
      tags: ["self-care", "morning", "peace"],
      color: "from-accent to-primary"
    },
    {
      id: 3,
      title: "Call with Mom",
      date: "2024-01-13",
      category: "relationship",
      emotion: "grateful",
      preview: "Had the most heartwarming conversation with mom today...",
      tags: ["family", "love", "connection"],
      color: "from-primary to-secondary"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Memories', icon: Archive },
    { id: 'milestone', name: 'Milestones', icon: Star },
    { id: 'daily', name: 'Daily Moments', icon: Calendar },
    { id: 'relationship', name: 'Relationships', icon: Heart }
  ];

  const filteredMemories = memories.filter(memory => {
    const matchesCategory = selectedCategory === 'all' || memory.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-secondary mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-poppins">
              Memory Vault
            </h2>
            <Sparkles className="w-6 h-6 text-secondary ml-3" />
          </div>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto font-poppins leading-relaxed">
            Your precious memories, organized and beautifully preserved for you to rediscover
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your memories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-accent/30 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary font-poppins"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-poppins transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-accent/20 text-primary hover:bg-accent/30'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Memory Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemories.map((memory) => (
            <Card key={memory.id} className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none overflow-hidden rounded-3xl">
              <div className={`h-2 bg-gradient-to-r ${memory.color}`}></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-primary font-poppins group-hover:text-secondary transition-colors">
                    {memory.title}
                  </h3>
                  <Badge className="bg-accent/20 text-accent border-none font-poppins text-xs font-medium">
                    {memory.emotion}
                  </Badge>
                </div>
                
                <p className="text-sm text-primary/60 mb-3 font-poppins">
                  {new Date(memory.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                
                <p className="text-primary/80 mb-4 font-poppins text-sm leading-relaxed">
                  {memory.preview}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {memory.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-peach-light text-primary/70 rounded-full text-xs font-poppins"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-secondary hover:text-primary font-poppins text-sm p-0 h-auto hover:bg-transparent"
                >
                  Read full memory →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMemories.length === 0 && (
          <div className="text-center py-12">
            <Archive className="w-16 h-16 text-primary/30 mx-auto mb-4" />
            <p className="text-primary/60 font-poppins">No memories found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MemoryVaultSection;
