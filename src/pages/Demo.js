import React, { useState } from 'react';
import { 
  ArrowPathIcon, 
  LockClosedIcon, 
  ChartPieIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

function Demo() {
  const [activeTab, setActiveTab] = useState('features');

  // Données de démonstration
  const demoFeatures = [
    {
      title: "Content Analysis",
      description: "Analyze video performance, engagement rates, and viewer retention patterns.",
      icon: <ChartPieIcon className="h-6 w-6 text-primary" />
    },
    {
      title: "Theme Discovery",
      description: "Identify trending themes and topics in your content niche using AI analysis.",
      icon: <DocumentTextIcon className="h-6 w-6 text-primary" />
    },
    {
      title: "Data Security",
      description: "Your data is securely handled with industry-standard encryption and protection.",
      icon: <LockClosedIcon className="h-6 w-6 text-primary" />
    }
  ];

  const permissions = [
    {
      scope: "user.info.basic",
      description: "Access basic profile information to personalize your experience.",
      usage: "Display your profile picture and username in the dashboard."
    },
    {
      scope: "video.list",
      description: "Access your video list to provide content analysis.",
      usage: "Analyze video performance and identify successful patterns."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          GnarokThematik Demo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore how GnarokThematik helps TikTok creators optimize their content through
          advanced thematic analysis and data-driven insights.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8" aria-label="Tabs">
          {['features', 'permissions', 'workflow'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Features Section */}
      {activeTab === 'features' && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {demoFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Permissions Section */}
      {activeTab === 'permissions' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Required Permissions
            </h3>
            <div className="space-y-6">
              {permissions.map((permission, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    {permission.scope}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {permission.description}
                  </p>
                  <div className="flex items-start mt-2">
                    <ArrowPathIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-sm text-gray-500">
                      Usage: {permission.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Workflow Section */}
      {activeTab === 'workflow' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            How GnarokThematik Works
          </h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                  1
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Connect Your TikTok Account</h4>
                <p className="mt-1 text-gray-600">
                  Securely connect your TikTok account using OAuth. We only request essential
                  permissions needed for content analysis.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                  2
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Data Analysis</h4>
                <p className="mt-1 text-gray-600">
                  Our AI analyzes your content to identify successful patterns, trending themes,
                  and engagement opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                  3
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Get Insights</h4>
                <p className="mt-1 text-gray-600">
                  Receive personalized recommendations and actionable insights to optimize
                  your content strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
          Try GnarokThematik Demo
        </button>
        <p className="mt-4 text-sm text-gray-600">
          No real TikTok authentication required for demo mode
        </p>
      </div>
    </div>
  );
}

export default Demo;