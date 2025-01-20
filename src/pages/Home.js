import React from 'react';
import { ChartBarIcon, LightBulbIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

function Home() {
  const handleTikTokLogin = () => {
    // URL d'authentification TikTok à implémenter
    console.log('TikTok login clicked');
  };

  const features = [
    {
      title: "Content Analysis",
      description: "Get detailed insights about your TikTok content performance. Track views, likes, comments, and shares. Understand your audience engagement patterns and peak performance times.",
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      demo: "Average engagement rate increase of 25% for creators using our analysis tools."
    },
    {
      title: "Theme Discovery",
      description: "Identify trending themes and topics in your niche. Use AI-powered analysis to find content opportunities and track emerging trends before they go viral.",
      icon: <LightBulbIcon className="h-8 w-8 text-primary" />,
      demo: "Discover top 10 trending themes in your niche updated daily."
    },
    {
      title: "Optimization Tips",
      description: "Receive personalized recommendations to improve your content. Get actionable insights based on successful content patterns in your niche.",
      icon: <ArrowTrendingUpIcon className="h-8 w-8 text-primary" />,
      demo: "Custom recommendations based on analysis of over 10,000 successful TikTok videos."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to GnarokThematik
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Analyze your TikTok content and discover trending themes. Use data-driven insights to grow your audience and improve engagement.
        </p>
        <button
          onClick={handleTikTokLogin}
          className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
        >
          Connect with TikTok
        </button>
      </div>
      
      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</div>
            <span>Connect your TikTok account</span>
          </div>
          <div className="flex items-center">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</div>
            <span>Select content for analysis</span>
          </div>
          <div className="flex items-center">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</div>
            <span>Get detailed insights and recommendations</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              {feature.icon}
              <h3 className="text-xl font-semibold ml-2">{feature.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">
              {feature.description}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 font-medium">
                💡 Demo: {feature.demo}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Ready to optimize your TikTok content?</h2>
        <p className="text-gray-600 mb-8">
          Join creators who are already using GnarokThematik to improve their content strategy.
        </p>
        <button
          onClick={handleTikTokLogin}
          className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
        >
          Start analyzing your content
        </button>
      </div>
    </div>
  );
}

export default Home;