import { sanityClient } from "sanity:client";

// Partes comunes de las consultas
const ARTICLE_FIELDS = `
  titleseo,
  descseo,
  keyseo,
  title,
  slug {
    current
  },
  excerpt,
  mainImage {
    "media": asset -> { url },
    "alt": asset -> { altText }
  },
  body,
  publishedAt,
  categories[]-> {
    title,
    slug {
      current
    }
  },
  author->{
    name,
    bio
  }
`;

const CATEGORY_FIELDS = `
  titleseo,
  descseo,
  keyseo,
  slug {
    current
  },
  title
`;

// get all articles
export const getDataArticles = async () => {
  const QUERY = `*[_type == 'post']{ ${ARTICLE_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
//get the article by slug
export const getDataArticlesBySlug = async (slug) => {
  const QUERY = `*[_type == 'post' && slug.current == '${slug}']{ ${ARTICLE_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
//get all article's category
export const getDataArticlesCategory = async () => {
  const QUERY = `*[_type == 'post-category']{ ${CATEGORY_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
//get all article's category by slug
export const getDataArticlesCategoryBySlug = async (slug) => {
  const QUERY = `*[_type == 'post-category' && slug.current == '${slug}']{ ${CATEGORY_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};

// get all articles by category slug
export const getDataArticlesByCategorySlug = async (slug) => {
  const QUERY = `*[_type == 'post' && references(*[_type == 'post-category' && slug.current == '${slug}']._id)]{
    ${ARTICLE_FIELDS}
  }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
