import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Fireworks from '../components/Fireworks';
import CardPreview from '../components/CardPreview';

export default function CreateCard() {
  const [formData, setFormData] = useState({
    to: '',
    from: '',
    message: '',
    theme: 'love' as const
  });
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen pt-20">
      <Fireworks />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Create a Heartfelt New Year Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">To My Dear</label>
              <input
                type="text"
                value={formData.to}
                onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter name of your loved one"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message from the Heart</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
                placeholder="Write your heartfelt New Year wishes..."
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">With Love From</label>
              <input
                type="text"
                value={formData.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <Button 
                type="button" 
                variant="secondary"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </Button>
              <Button type="submit">
                Send with Love
              </Button>
            </div>
          </form>
          
          {showPreview && formData.to && formData.from && formData.message && (
            <div className="mt-8">
              <h3 className="text-white text-xl mb-4">Preview</h3>
              <CardPreview {...formData} />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}