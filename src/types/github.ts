export interface GitHubAppConfig {
  name: string;
  description: string;
  url: string;
  permissions: {
    [key: string]: 'read' | 'write' | 'none';
  };
  webhooks: string[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  category: 'repository' | 'organization' | 'account';
}