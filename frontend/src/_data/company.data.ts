//@ts-ignore
import { sanityClient } from "sanity:client";
import type { Company } from "../_types/company.types";

const COMPANY_FIELDS = `
    general{
        string_name,
        img_logoNav{
            "media": asset -> { url },
            "alt": asset -> { altText }
        },
        string_brand,
        string_slogan,
        img_logoFooter{
            "media": asset -> { url },
            "alt": asset -> { altText }
        }
    },
    contact{
        string_email,
        string_phone,
        string_address,
        string_addressMap,
        string_addressMapUrl
    },
    social{
        string_urlFacebook,
        string_urlInstagram,
        string_urlLinkedin,
        string_urlTwitter,
    },
    policy{
        block_policy,
    }
`;

export const getCompanyData = async (): Promise<Company> => {
  const QUERY = `*[_type == 'company'][0]{ ${COMPANY_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
