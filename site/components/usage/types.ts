export interface UsageProps {
  cards: Array<UsageCardProps>;
}

export interface UsageCardProps {
  title: string;
  description: string;
  allowed: boolean;
  media: {
    src: string;
    alt: string;
  };
}
