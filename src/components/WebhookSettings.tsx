import React from 'react';
import { PlusCircle, XCircle } from 'lucide-react';

interface WebhookSettingsProps {
  webhooks: string[];
  onWebhooksChange: (webhooks: string[]) => void;
}

export function WebhookSettings({ webhooks, onWebhooksChange }: WebhookSettingsProps) {
  const addWebhook = () => {
    onWebhooksChange([...webhooks, '']);
  };

  const removeWebhook = (index: number) => {
    onWebhooksChange(webhooks.filter((_, i) => i !== index));
  };

  const updateWebhook = (index: number, value: string) => {
    const newWebhooks = [...webhooks];
    newWebhooks[index] = value;
    onWebhooksChange(newWebhooks);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Webhook Settings</h3>
        <button
          type="button"
          onClick={addWebhook}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Webhook
        </button>
      </div>

      <div className="space-y-4">
        {webhooks.map((webhook, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="url"
              value={webhook}
              onChange={(e) => updateWebhook(index, e.target.value)}
              className="flex-1 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white transition-colors"
              placeholder="https://example.com/webhook"
            />
            <button
              type="button"
              onClick={() => removeWebhook(index)}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <XCircle className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}