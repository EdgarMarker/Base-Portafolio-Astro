import { sanityClient } from "sanity:client";

export const getDataBlogPage = async () => {
  const QUERY = `*[_type == 'blog']{
        titleseo,
        descseo,
        keyseo,
        heroBtn,
        heroH1,
        heroH2,
        heroImg{
            "media": asset -> {url},
            "alt": asset -> {altText}
        },
        heroP,
    }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
