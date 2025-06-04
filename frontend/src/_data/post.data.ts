//@ts-ignore
import { sanityClient } from "sanity:client";
import type { PostDetail, PostCategory } from "../_types/post.types";

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

const POST_FIELDS = `
    general{
        slug,
        string_title,
        dateTime_publishedAt,
        arrRef_category[]->{
            ${CATEGORY_FIELDS}
        },
        ref_author->{
            string_name,
            slug
        }
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

export const getPostData = async (): Promise<PostDetail[]> => {
  const QUERY = `*[_type == 'post']{ ${POST_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};

export const getAllCategoriesData = async (): Promise<PostCategory[]> => {
  const QUERY = `*[_type == 'postCategory']{ ${CATEGORY_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};

export const getPostDataBySlug = async ({
  slug,
}: {
  slug: any;
}): Promise<PostDetail> => {
  const QUERY = `*[_type == 'post' && general.slug.current == '${slug}']{ ${POST_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data[0];
};

export const getAllPostsDataByCategory = async ({
  category,
}: {
  category: any;
}): Promise<PostDetail[]> => {
  const QUERY = `*[_type == 'post' && references(*[_type == 'postCategory' && category.slug.current == '${category}']._id)] { ${POST_FIELDS} }`;
  const data = await sanityClient.fetch(QUERY);
  return data;
};
