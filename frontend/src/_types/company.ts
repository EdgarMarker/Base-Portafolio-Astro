import type { BlockContent, Img, Slug } from "./_globals";

export interface Company {
  brandAddress: string;
  brandAddressUrl: string;
  brandEmail: string;
  brandIndustry: string;
  brandLogo: Img;
  brandName: string;
  brandPhone: string;
  brandTagLine: string;
  footLogo: Img;
}

export interface Social {
  facebook: string;
  instagram: string;
}

export interface Privacy {
  heroH1: string;
  slug: Slug;
  avisoText: BlockContent[];
}
