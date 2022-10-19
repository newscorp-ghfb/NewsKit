export interface HomepageContent {
  LatestBlogTitle: string;
  LatestBlogDescription: string;
  LatestBlogLinkText: string;
  LatestBlogLink: string;
  AndMoreTitle: string;
  AndMoreLink: string;
}

export interface HomepageContentProps {
  content: HomepageContent;
}
