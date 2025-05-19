import React from "react";
import type { Product } from "../../_types/products-product";
import type { Articles } from "../../_types/blog-articles";

interface Props {
  children: React.ReactNode;
  data: Product | Articles;
  from?: string;
  className?: string;
}

const CardProduct = ({ children, className, data, from }: Props) => {
  //get date
  const date = new Date(data.publishedAt);
  //format date to DD-MM-YYYY
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}`;

  return (
    <li className={`card ${className}`}>
      {data.categories?.length > 0 &&
        data.categories.map((category, idx) => (
          <a
            href={`/${from}/categoria/${category.slug?.current ?? ""}`}
            key={idx}
          >
            <span>/{category.title}</span>
          </a>
        ))}
      <a href={`/${from}/${data.slug.current}`}>
        <h4>{data.title}</h4>
      </a>
      <a href={`/${from}/${data.slug.current}`}>{children}</a>
      {"author" in data && (
        <span>
          Escrito por {data.author.name} el {formattedDate}
        </span>
      )}
      {"excerpt" in data && <span>{data.excerpt}</span>}
    </li>
  );
};

export default CardProduct;
