
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Archive, Heart, Star, Calendar, Search, Sparkles, Filter, SortAsc, Eye } from 'lucide-react';

const MemoryVaultSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const memories = [
    {
      id: 1,
      title: "First Day at New Job",
      date: "2024-01-15",
      category: "milestone",
      emotion: "excited",
      preview: "Today marked the beginning of a new chapter in my career. Walking into the office, I felt a mix of nervousness and excitement...",
      tags: ["career", "growth", "new beginnings"],
      gradient: "from-amber-400 to-orange-500",
      views: 12,
      favorite: true
    },
    {
      id: 2,
      title: "Sunday Morning Coffee",
      date: "2024-01-14",
      category: "daily",
      emotion: "peaceful",
      preview: "The perfect quiet morning with just me, my coffee, and my thoughts. Steam rising from my cup as I watched the sunrise...",
      tags: ["self-care", "morning", "peace"],
      gradient: "from-blue-400 to-purple-500",
      views: 8,
      favorite: false
    },
    {
      id: 3,
      title: "Call with Mom",
      date: "2024-01-13",
      category: "relationship",
      emotion: "grateful",
      preview: "Had the most heartwarming conversation with mom today. Her voice always brings such comfort and wisdom to my day...",
      tags: ["family", "love", "connection"],
      gradient: "from-pink-400 to-red-500",
      views: 15,
      favorite: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Archive, count: memories.length },
    { id: 'milestone', name: 'Milestones', icon: Star, count: 1 },
    { id: 'daily', name: 'Daily', icon: Calendar, count: 1 },
    { id: 'relationship', name: 'Relationships', icon: Heart, count: 1 }
  ];

  const filteredMemories = memories.filter(memory => {
    const matchesCategory = selectedCategory === 'all' || memory.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Archive className="w-8 h-8 text-slate-700 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 font-poppins">
              Memory Vault
            </h2>
            <Archive className="w-8 h-8 text-slate-700 ml-3" />
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-poppins leading-relaxed">
            Your precious memories, intelligently organized and beautifully preserved
          </p>
        </div>

        {/* Advanced Search and Filter Bar */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search memories, tags, emotions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent font-poppins"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="date">Sort by Date</option>
                  <option value="views">Sort by Views</option>
                  <option value="favorites">Sort by Favorites</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-poppins transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-slate-800 text-white shadow-lg transform scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
                <Badge className="bg-slate-200 text-slate-700 text-xs ml-1">
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Memory Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemories.map((memory) => (
            <Card key={memory.id} className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-none overflow-hidden rounded-3xl relative">
              {/* Gradient Header */}
              <div className={`h-24 bg-gradient-to-r ${memory.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  {memory.favorite && <Heart className="w-4 h-4 text-white fill-current" />}
                  <div className="flex items-center gap-1 text-white/90 text-xs">
                    <Eye className="w-3 h-3" />
                    <span>{memory.views}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 -mt-6 relative">
                {/* Floating Emotion Badge */}
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-white text-slate-700 border-2 border-gray-100 shadow-lg font-poppins text-xs font-medium capitalize px-3 py-1">
                    {memory.emotion}
                  </Badge>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-slate-800 font-poppins group-hover:text-slate-600 transition-colors mb-2">
                    {memory.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 mb-3 font-poppins">
                    {new Date(memory.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  
                  <p className="text-slate-600 mb-4 font-poppins text-sm leading-relaxed line-clamp-3">
                    {memory.preview}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {memory.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-poppins hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      className="text-slate-600 hover:text-slate-800 font-poppins text-sm p-0 h-auto hover:bg-transparent group-hover:translate-x-1 transition-transform"
                    >
                      Read full memory →
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-400 hover:text-red-500 p-1"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-400 hover:text-slate-600 p-1"
                      >
                        <Archive className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMemories.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Archive className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2 font-poppins">No memories found</h3>
            <p className="text-slate-500 font-poppins">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Stats Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                {memories.length}
              </div>
              <div className="text-slate-500 font-poppins text-sm">Total Memories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                {memories.reduce((sum, m) => sum + m.views, 0)}
              </div>
              <div className="text-slate-500 font-poppins text-sm">Total Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                {memories.filter(m => m.favorite).length}
              </div>
              <div className="text-slate-500 font-poppins text-sm">Favorites</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800 font-poppins">
                {new Set(memories.flatMap(m => m.tags)).size}
              </div>
              <div className="text-slate-500 font-poppins text-sm">Unique Tags</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryVaultSection;
