import React, { useState } from 'react';
import { GitHubAppConfig } from './types/github';
import { AppForm } from './components/AppForm';
import { PermissionsManager } from './components/PermissionsManager';
import { WebhookSettings } from './components/WebhookSettings';
import { ThemeToggle } from './components/ThemeToggle';
import { Infographic } from './components/Infographic';
import { Github } from 'lucide-react';

function App() {
  const [config, setConfig] = useState<GitHubAppConfig>({
    name: '',
    description: '',
    url: '',
    permissions: {},
    webhooks: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('App Configuration:', config);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-dark transition-all duration-300">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 shadow-glass dark:shadow-glass-dark">
            <div className="flex items-center">
              <Github className="h-8 w-8 text-gray-900 dark:text-white mr-3" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                GitHub Apps Builder
              </h1>
            </div>
            <ThemeToggle />
          </div>

          <Infographic />

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-glass dark:shadow-glass-dark hover:shadow-glass-hover dark:hover:shadow-glass-hover-dark transition-all duration-300">
              <div className="px-4 py-5 sm:p-6">
                <AppForm
                  config={config}
                  onChange={(newConfig) => setConfig(newConfig)}
                />
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-glass dark:shadow-glass-dark hover:shadow-glass-hover dark:hover:shadow-glass-hover-dark transition-all duration-300">
              <div className="px-4 py-5 sm:p-6">
                <PermissionsManager
                  permissions={config.permissions}
                  onPermissionChange={(key, value) =>
                    setConfig({
                      ...config,
                      permissions: { ...config.permissions, [key]: value },
                    })
                  }
                />
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-glass dark:shadow-glass-dark hover:shadow-glass-hover dark:hover:shadow-glass-hover-dark transition-all duration-300">
              <div className="px-4 py-5 sm:p-6">
                <WebhookSettings
                  webhooks={config.webhooks}
                  onWebhooksChange={(webhooks) =>
                    setConfig({ ...config, webhooks })
                  }
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600/90 hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500/90 dark:hover:bg-indigo-600/90 shadow-glass dark:shadow-glass-dark hover:shadow-glass-hover dark:hover:shadow-glass-hover-dark transition-all duration-300"
              >
                Create GitHub App
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;