// @ts-ignore
import { sanityClient } from "sanity:client";
import type { HomePage } from "../_types/homePage.types";

const HOME_FIELDS = `
  seo {
    string_titleSeo,
    text_descSeo,
    text_keySeo
  },
  hero {
    string_h1,
    block_info,
    string_btn,
    img_bg {
      "media": asset -> { url },
      "alt": asset -> { altText }
    }
  },
  intro {
    string_h3,
    block_info,
    string_btn,
    img_1 {
      "media": asset -> { url },
      "alt": asset -> { altText }
    },
    img_2 {
      "media": asset -> { url },
      "alt": asset -> { altText }
    }
  },
  rProducts {
    arrRef_products[]-> {
      general{
        string_title,
        slug{
          current
        },
        dateTime_publishedAt,
        arrRef_category[]-> {
          category{
            string_title,
            slug{
              current
            }
          }
        }
      },
      card{
        text_excerpt,
        img_card{
          "media": asset -> { url },
        }
      }
    }
  }
`;

// get home page data
export const getHomePageData = async (): Promise<HomePage> => {
  const QUERY = `*[_type == 'home'][0]{ ${HOME_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
