import { sanityClient } from "sanity:client";

export const getDataInicio = async () => {
  const QUERY = `*[_type == "inicio"]{
        titleseo,
        descseo,
        keyseo,
        heroH1,
        heroImg{
          "media": asset->{url},
          "alt": asset->{altText}
        },
        heroBtn,
        heroH2,
        heroP,
        introH3,
        introH2,
        introRichText,
        introBtn,
        introImg1{
          "media": asset -> {url},
          "alt": asset -> {altText}
        },
        introImg2{
          "media": asset -> {url},
          "alt": asset -> {altText}
        },
        recentProdRef{
          recentProducts[]->{
            publishedAt,
            title,
            slug{
              current
            },
            mainImage{
              "media": asset -> {url},
              "alt": asset -> {altText}
            }
          }
        }
    }`;

  const data = await sanityClient.fetch(QUERY);

  return data[0];
};
