interface RoadmapContent {
  intro_name: string;
  intro_secondary: string;
  intro_description: string;
  intro_hero_illustration: string;
  current_headline: string;
  current_description: string;
  comingup_headline: string;
  comingup_description: string;
  future_headline: string;
  future_description: string;
  [current_li_keys: `current_li_${string}`]: string;
  [comingup_li_keys: `comingup_li_${string}`]: string;
  [future_li_keys: `future_li_${string}`]: string;
}

export const roadmapFallbackContent: RoadmapContent = {
  intro_name: 'Roadmap - fallback',
  intro_description:
    'Fallback - NewsKit’s Design System team is busy building and planning to help you build better products faster.',
  intro_hero_illustration: 'components/hero-roadmap-illustration',
  intro_secondary:
    'The roadmap is a living document, and it is likely that priorities will change. See our Trello board for more details on the roadmap.',
  current_headline: 'Current Quarter',
  current_description: 'What we are working on:',
  comingup_headline: 'Coming Up',
  comingup_description: 'The focus for the next quarter:',
  future_headline: 'Future',
  future_description: 'Ideas we plan to look at:',
};
