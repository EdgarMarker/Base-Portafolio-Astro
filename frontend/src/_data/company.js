import { sanityClient } from "sanity:client";

export const getDataCompany = async () => {
  const QUERY = `*[_type == "empresa"]{
    brandAddress,
    brandAddressUrl,
    brandEmail,
    brandIndustry,
    brandLogo{
        "media": asset -> {url},
        "alt": asset -> {altText}
    },
    brandName,
    brandPhone,
    brandTagLine,
    footLogo{
        "media": asset -> {url},
        "alt": asset -> {altText}
    }
}`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};

export const getDataCompanySocial = async () => {
  const QUERY = `*[_type == 'social']{
    facebook,
    instagram
  }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};

export const getDataCompanyPrivacy = async () => {
  const QUERY = `*[_type == 'aviso']{
    heroH1,
    slug{
      current
    },
    avisoText
  }`;

  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
