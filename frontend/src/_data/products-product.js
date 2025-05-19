import { sanityClient } from "sanity:client";

// Partes comunes de las consultas
const PRODUCT_FIELDS = `
  titleseo,
  descseo,
  keyseo,
  title,
  slug {
    current
  },
  body,
  publishedAt,
  mainImage {
    "media": asset -> { url },
    "alt": asset -> { altText }
  },
  categories[]-> {
    title,
    slug {
      current
    }
  },
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

// get all products
export const getDataProduct = async () => {
  const QUERY = `*[_type == 'products']{ ${PRODUCT_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
//get the product by slug
export const getDataProductBySlug = async (slug) => {
  const QUERY = `*[_type == 'products' && slug.current == '${slug}']{ ${PRODUCT_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
//get all product's category
export const getDataProductCategory = async () => {
  const QUERY = `*[_type == 'category']{ ${CATEGORY_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
//get all product's category by slug
export const getDataProductCategoryBySlug = async (slug) => {
  const QUERY = `*[_type == 'category' && slug.current == '${slug}']{ ${CATEGORY_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};
// get all articles by category slug
export const getDataProductByCategorySlug = async (slug) => {
  const QUERY = `*[_type == 'products' && references(*[_type == 'category' && slug.current == '${slug}']._id)]{
    ${PRODUCT_FIELDS}
  }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
