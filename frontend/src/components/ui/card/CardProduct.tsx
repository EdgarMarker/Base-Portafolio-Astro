import React from "react";
import type { ProductDetail } from "../../../_types/product.types";
import type { PostDetail } from "../../../_types/post.types";

interface Props {
  children: React.ReactNode;
  data: ProductDetail | PostDetail;
  from?: string;
  className?: string;
}

const CardProduct = ({ children, className, data, from }: Props) => {
  //get date
  const date = new Date(data.general?.dateTime_publishedAt);
  //format date to DD-MM-YYYY
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}`;

  return (
    <li className={`card ${className}`}>
      {data.general?.arrRef_category.length > 0 &&
        data.general.arrRef_category.map((category, idx) => (
          <a
            href={`/${from}/categoria/${category.category.slug.current ?? ""}`}
            key={idx}
          >
            <span>/{category.category.string_title}</span>
          </a>
        ))}
      <a href={`/${from}/${data.general.slug.current}`}>
        <h4>{data.general.string_title}</h4>
      </a>
      <a href={`/${from}/${data.general.slug.current}`}>{children}</a>
      {"author" in data && (
        <span>
          Escrito por {data.general.ref_author?.string_name} el {formattedDate}
        </span>
      )}
      {"excerpt" in data && <span>{data.card.text_excerpt}</span>}
    </li>
  );
};

export default CardProduct;
