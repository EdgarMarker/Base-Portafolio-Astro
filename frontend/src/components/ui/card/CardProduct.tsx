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
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;

  return (
    <li className={`card ${className}`}>
      <div className="card__category">
        {data.general?.arrRef_category.length > 0 &&
        data.general.arrRef_category.map((category, idx) => (
          <a
            href={`/${from}/categoria/${category.category.slug.current ?? ""}`}
            key={idx}
          >
            {category.category.string_title}
          </a>
        ))}
      </div>
      
      <div className="card__title">
        <a href={`/${from}/${data.general.slug.current}`}>
          {data.general.string_title}
        </a>
      </div>
        
      <a href={`/${from}/${data.general.slug.current}`}>{children}</a>
      
      <div className="card__author">
        {data.general?.ref_author?.string_name && (
          <span>
            Escrito por {data.general.ref_author.string_name} el {formattedDate}
          </span>
        )}
      </div>
      
      <div className="card__excerpt">
        {data.card?.text_excerpt && <span>{data.card.text_excerpt}</span>}
      </div>

      <a className="btn" href={`/${from}/${data.general.slug.current}`}>
        {from === "blog" ? "Leer artículo" : "Ver producto"}
      </a>
      
    </li>
  );
};

export default CardProduct;
