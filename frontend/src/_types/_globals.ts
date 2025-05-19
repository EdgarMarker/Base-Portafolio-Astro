export interface Img {
  media: {
    url: string;
  };
  alt: {
    altText: string;
  };
}

export interface BlockContent {
  markDefs: any[];
  style: string;
  _key: string;
  _type: string;
  children: Array<{
    _key: string;
    _type: string;
    text: string;
  }>;
}

export interface Slug {
  current: string;
}

export interface Category {
  titleseo: string;
  descseo: string;
  keyseo: string;
  slug: Slug;
  title: string;
}

export interface Author {
  name: string;
  bio: BlockContent[];
}
