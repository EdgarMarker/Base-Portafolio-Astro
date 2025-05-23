// @ts-ignore
import { sanityClient } from "sanity:client";
import type { ProductsPage } from "../_types/productsPage.types";

const PAGE_FIELDS = `
    seo{
        string_titleSeo,
        text_descSeo,
        text_keySeo
    },
    hero{
        string_h1,
        block_info,
        string_btn,
        img_hero {
            "media": asset -> { url },
            "alt": asset -> { altText }
        }
    }
`;

export const getProductsPageData = async (): Promise<ProductsPage> => {
  const QUERY = `*[_type == 'products'][0]{ ${PAGE_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
