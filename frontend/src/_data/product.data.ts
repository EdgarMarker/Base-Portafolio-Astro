// @ts-ignore
import { sanityClient } from "sanity:client";
import type { ProductCategory, ProductDetail } from "../_types/product.types";

const CATEGORY_FIELDS = `
    seo{
        string_titleSeo,
        text_descSeo,
        text_keySeo
    },
    category{
        string_title,
        slug
    }
`;

const PRODUCT_FIELDS = `
    general{
        slug,
        string_title,
        dateTime_publishedAt,
        arrRef_category[]->{
            ${CATEGORY_FIELDS}
        },
    },
    card{
        text_excerpt,
        img_card{
            "media": asset -> { url },
            "alt": asset -> { altText }
        }
    },
    seo {
        string_titleSeo,
        text_descSeo,
        text_keySeo
    },
    page{
        hero{
            string_h1,
            block_info,
            string_btn,
            img_bg{
                "media": asset -> { url },
                "alt": asset -> { altText }
            }
        }
    }
`;
export const getProductData = async (): Promise<ProductDetail[]> => {
  const QUERY = `*[_type == 'product']{ ${PRODUCT_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
export const getAllCategoriesData = async (): Promise<ProductCategory[]> => {
  const QUERY = `*[_type == 'productCategory']{ ${CATEGORY_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};

export const getProductDataBySlug = async ({
  slug,
}: {
  slug: any;
}): Promise<ProductDetail> => {
  const QUERY = `*[_type == 'product' && general.slug.current == '${slug}']{ ${PRODUCT_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};

export const getAllProductsDataByCategory = async ({
  category,
}: {
  category: any;
}): Promise<ProductDetail[]> => {
  const QUERY = `*[_type == 'product' && references(*[_type == 'productCategory' && category.slug.current == '${category}']._id)] { ${PRODUCT_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
