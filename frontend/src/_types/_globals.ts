export interface Image {
  _type: string;
  media: {
    url: string;
  };
}

export interface Block {
  _type: "block";
  children: Array<{
    _type: "span";
    text: string;
    marks?: string[];
  }>;
  style: string;
}

export interface SEO {
  string_titleSeo: string;
  text_dscSeo: string;
  text_keySeo: string;
}

export interface SLUG {
  _type: "slug";
  current: string;
}
