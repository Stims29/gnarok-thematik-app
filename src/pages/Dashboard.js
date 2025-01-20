import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpIcon, ArrowDownIcon, VideoCameraIcon, UsersIcon, ChartBarIcon, HashtagIcon } from '@heroicons/react/24/outline';

function Dashboard() {
  // Données de démo
  const performanceData = [
    { date: 'Jan 1', views: 1500, likes: 800, comments: 200 },
    { date: 'Jan 2', views: 2000, likes: 1100, comments: 300 },
    { date: 'Jan 3', views: 1800, likes: 900, comments: 250 },
    { date: 'Jan 4', views: 2400, likes: 1300, comments: 350 },
    { date: 'Jan 5', views: 2200, likes: 1200, comments: 320 },
  ];

  const themePerformance = [
    { name: 'Tutorial', value: 35 },
    { name: 'Lifestyle', value: 25 },
    { name: 'Entertainment', value: 20 },
    { name: 'Educational', value: 20 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const stats = [
    { title: "Total Views", value: "10.2K", change: "+12.5%", icon: <VideoCameraIcon className="h-6 w-6" />, trend: "up" },
    { title: "Engagement Rate", value: "8.4%", change: "+2.3%", icon: <ChartBarIcon className="h-6 w-6" />, trend: "up" },
    { title: "Followers", value: "2.5K", change: "-0.5%", icon: <UsersIcon className="h-6 w-6" />, trend: "down" },
    { title: "Active Themes", value: "12", change: "+4", icon: <HashtagIcon className="h-6 w-6" />, trend: "up" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <div className="flex items-center mt-1">
                  {stat.trend === 'up' ? (
                    <ArrowUpIcon className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`ml-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Performance Over Time */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Over Time</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#1a56db" />
                <Line type="monotone" dataKey="likes" stroke="#7e3af2" />
                <Line type="monotone" dataKey="comments" stroke="#0e9f6e" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Theme Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Theme Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={themePerformance}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {themePerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {themePerformance.map((theme, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-sm">{theme.name}: {theme.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Content Performance */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Content Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-6 text-left">Video</th>
                <th className="py-3 px-6 text-left">Theme</th>
                <th className="py-3 px-6 text-right">Views</th>
                <th className="py-3 px-6 text-right">Likes</th>
                <th className="py-3 px-6 text-right">Comments</th>
                <th className="py-3 px-6 text-right">Engagement Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">#Dance Tutorial</td>
                <td className="py-4 px-6">Tutorial</td>
                <td className="py-4 px-6 text-right">2.5K</td>
                <td className="py-4 px-6 text-right">1.2K</td>
                <td className="py-4 px-6 text-right">150</td>
                <td className="py-4 px-6 text-right">8.5%</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;