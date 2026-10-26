export interface ToolItem {
  slug: string;
  title: string;
  description: string;
  href: string;
  enabled: boolean;
}

export const tools: ToolItem[] = [
  {
    slug: 'search-query-builder',
    title: 'Search Query Builder',
    description: 'Build targeted search engine queries with operators and filters to investigate potential brand or content misuse online.',
    href: '/tools/search-query-builder',
    enabled: true,
  },
];
