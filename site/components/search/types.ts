import {
  InternalDocSearchHit,
  StoredDocSearchHit,
} from '@docsearch/react/dist/esm/types';

export interface SearchProps {
  sidebarOpen?: boolean;
}

export type DocSearchHitExtended = (
  | InternalDocSearchHit
  | StoredDocSearchHit
) & {
  as: string;
  pathname: string;
};

export type DocSearchHitProps = {
  children: React.ReactNode;
  hit: InternalDocSearchHit | StoredDocSearchHit;
};
