import { sanityClient } from "sanity:client";

export const getDataProducts = async () => {
  const QUERY = `*[_type == 'productos']{
        titleseo,
        descseo,
        keyseo,
        heroH1,
        heroH2,
        heroBtn,
        heroP,
        heroImg{
            "media" : asset -> {url},
            "alt": asset -> {altText}
        }
    }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
