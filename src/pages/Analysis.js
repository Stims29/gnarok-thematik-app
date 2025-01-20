import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FunnelIcon, AdjustmentsHorizontalIcon, ClockIcon } from '@heroicons/react/24/outline';

function Analysis() {
  const [selectedPeriod, setSelectedPeriod] = useState('last7days');
  const [selectedTheme, setSelectedTheme] = useState('all');

  // Données de démo
  const engagementData = [
    { time: '00:00', rate: 2.5 },
    { time: '04:00', rate: 1.8 },
    { time: '08:00', rate: 4.3 },
    { time: '12:00', rate: 5.2 },
    { time: '16:00', rate: 6.1 },
    { time: '20:00', rate: 4.8 },
  ];

  const themeData = [
    { name: 'Gaming', value: 30, color: '#0088FE' },
    { name: 'Education', value: 25, color: '#00C49F' },
    { name: 'Lifestyle', value: 20, color: '#FFBB28' },
    { name: 'Tech', value: 15, color: '#FF8042' },
    { name: 'Other', value: 10, color: '#8884d8' },
  ];

  const recommendations = [
    {
      title: "Optimal Posting Time",
      description: "Based on your audience engagement, the best time to post is between 16:00-18:00",
      type: "timing"
    },
    {
      title: "Content Length",
      description: "Videos between 30-45 seconds have 25% higher engagement rate",
      type: "content"
    },
    {
      title: "Theme Focus",
      description: "Gaming content shows strongest growth potential in your niche",
      type: "theme"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Filtres */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 mr-2 text-gray-500" />
            <select 
              className="border rounded-md p-2"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="last7days">Last 7 days</option>
              <option value="last30days">Last 30 days</option>
              <option value="last90days">Last 90 days</option>
            </select>
          </div>
          <div className="flex items-center">
            <FunnelIcon className="h-5 w-5 mr-2 text-gray-500" />
            <select 
              className="border rounded-md p-2"
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              <option value="all">All Themes</option>
              <option value="gaming">Gaming</option>
              <option value="education">Education</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>
        </div>
      </div>

      {/* Graphiques d'analyse */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Engagement par heure */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Engagement by Time</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#1a56db" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution des thèmes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Theme Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={themeData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {themeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Légende ajoutée */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {themeData.map((theme, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-2" 
                  style={{ backgroundColor: theme.color }}
                />
                <span className="text-sm">{theme.name} ({theme.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommandations */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <AdjustmentsHorizontalIcon className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-lg font-semibold">Personalized Recommendations</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2">{rec.title}</h4>
              <p className="text-gray-600 text-sm">{rec.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Métriques détaillées */}
      <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Theme
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg. Watch Time
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Engagement Rate
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Growth Trend
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Gaming</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">15.2K</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">45s</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">8.5%</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+12.3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Analysis;