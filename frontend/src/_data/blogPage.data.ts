// @ts-ignore
import { sanityClient } from "sanity:client";
import type { BlogPage } from "../_types/blogPage.types";

const BLOG_PAGE = `
    seo{
        string_titleSeo,
        text_dscSeo,
        text_keySeo
    },
    hero{
        string_h1,
        block_info,
        string_btn,
        img_hero{
            "media": asset -> { url },
            "alt": asset -> { altText }
        }
    },
`;

export const getBlogPageData = async (): Promise<BlogPage> => {
  const QUERY = `*[_type == 'blog'][0]{ ${BLOG_PAGE} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
