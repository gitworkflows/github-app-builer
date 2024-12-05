import React from 'react';
import { Permission } from '../types/github';

interface PermissionsManagerProps {
  permissions: { [key: string]: 'read' | 'write' | 'none' };
  onPermissionChange: (key: string, value: 'read' | 'write' | 'none') => void;
}

const AVAILABLE_PERMISSIONS: Permission[] = [
  {
    id: 'contents',
    name: 'Repository contents',
    description: 'Access to code and repository content',
    category: 'repository',
  },
  {
    id: 'issues',
    name: 'Issues',
    description: 'Access to issues and related comments',
    category: 'repository',
  },
  {
    id: 'pull_requests',
    name: 'Pull requests',
    description: 'Access to pull requests and related comments',
    category: 'repository',
  },
];

export function PermissionsManager({ permissions, onPermissionChange }: PermissionsManagerProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">App Permissions</h3>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {AVAILABLE_PERMISSIONS.map((permission) => (
          <div key={permission.id} className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {permission.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{permission.description}</p>
              </div>
              <select
                value={permissions[permission.id] || 'none'}
                onChange={(e) => 
                  onPermissionChange(
                    permission.id, 
                    e.target.value as 'read' | 'write' | 'none'
                  )
                }
                className="rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white transition-colors"
              >
                <option value="none">No access</option>
                <option value="read">Read</option>
                <option value="write">Read & Write</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}