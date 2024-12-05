import React from 'react';
import { GitBranch, Key, Webhook } from 'lucide-react';

export function Infographic() {
  const steps = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "1. Repository Access",
      description: "Configure which repositories your app can access and what actions it can perform."
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "2. Set Permissions",
      description: "Define granular permissions for repository contents, issues, and pull requests."
    },
    {
      icon: <Webhook className="h-8 w-8" />,
      title: "3. Configure Webhooks",
      description: "Set up webhook endpoints to receive real-time updates about repository events."
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-glass dark:shadow-glass-dark hover:shadow-glass-hover dark:hover:shadow-glass-hover-dark transition-all duration-300"
        >
          <div className="mb-4 text-indigo-600 dark:text-indigo-400">
            {step.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}