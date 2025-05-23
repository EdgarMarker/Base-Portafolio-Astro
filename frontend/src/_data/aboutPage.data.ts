// @ts-ignore
import { sanityClient } from "sanity:client";
import type { AboutPage } from "../_types/aboutPage.types";

const ABOUT_PAGE = `
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
    intro{
        string_h3,
        block_info,
        string_btn,
        img_1{
            "media": asset -> { url },
            "alt": asset -> { altText }
        },
        img_2{
            "media": asset -> { url },
            "alt": asset -> { altText }
        }
    }
`;

export const getAboutPageData = async (): Promise<AboutPage> => {
  const QUERY = `*[_type == 'about'][0]{ ${ABOUT_PAGE} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
