import { sanityClient } from "sanity:client";

export const getDataUs = async () => {
  const QUERY = `*[_type == 'nosotros']{
        titleseo,
        descseo,
        keyseo,
        heroH1,
        heroH2,
        heroP,
        heroBtn,
        heroImg{
            "media" : asset -> {url},
            "alt": asset -> {altText}
        },
        introH2,
        introH3,
        introRichText,
        introImg1{
            "media": asset -> {url},
            "alt": asset -> {altText}        
        },
        introImg2{
            "media": asset -> {url},
            "alt": asset -> {altText}
        }
    }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
