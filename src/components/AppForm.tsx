import React from 'react';
import { GitHubAppConfig } from '../types/github';
import { AlertCircle } from 'lucide-react';

interface AppFormProps {
  config: GitHubAppConfig;
  onChange: (config: GitHubAppConfig) => void;
}

export function AppForm({ config, onChange }: AppFormProps) {
  const handleChange = (field: keyof GitHubAppConfig, value: string) => {
    onChange({ ...config, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          App Name
        </label>
        <input
          type="text"
          value={config.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white transition-colors"
          placeholder="My GitHub App"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Description
        </label>
        <textarea
          value={config.description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white transition-colors"
          placeholder="Describe what your app does..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Homepage URL
        </label>
        <input
          type="url"
          value={config.url}
          onChange={(e) => handleChange('url', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white transition-colors"
          placeholder="https://example.com"
        />
      </div>

      <div className="rounded-md bg-blue-50 dark:bg-blue-900 p-4 transition-colors">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-blue-400 dark:text-blue-300" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              App Configuration Tips
            </h3>
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              <ul className="list-disc space-y-1 pl-5">
                <li>Choose a unique and descriptive name</li>
                <li>Provide clear installation instructions</li>
                <li>List all required permissions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}