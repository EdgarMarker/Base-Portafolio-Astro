// @ts-ignore
import { sanityClient } from "sanity:client";
import type { ContactPage } from "../_types/contactPage.types";

const CONTACT_PAGE = `
    seo{
        string_titleSeo,
        text_dscSeo,
        text_keySeo
    },
    hero{
        string_h1,
        block_info,
        string_btn,
        img_hero
    }
`;

export const getContactPageData = async (): Promise<ContactPage> => {
  const QUERY = `*[_type == 'contact'][0]{ ${CONTACT_PAGE} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
