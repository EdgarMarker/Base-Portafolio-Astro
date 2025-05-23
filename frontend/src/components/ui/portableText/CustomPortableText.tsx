import type { Block, Image } from "../../../_types/_globals";
import { PortableText } from "@portabletext/react";
import CustomImg, { type ImageCategory } from "../img/CustomImg";
import { urlFor } from "../../../_lib/sanity/imgOptimizer";

interface Props {
  data: (Block | Image)[];
  imgContainerClassName?: string;
  hasImg: boolean;
  category?: ImageCategory;
  quality?: number;
}

const CustomPortableText = ({
  hasImg = false,
  data,
  imgContainerClassName,
  category,
  quality,
}: Props) => {
  const components = {
    types: {
      image: ({ value }: { value: Image }) => {
        if (!hasImg) return null;
        return (
          <CustomImg
            containerClassName={imgContainerClassName}
            src={urlFor(value).url()}
            alt={value.alt.altText}
            width={800}
            height={600}
            category={category}
            quality={quality || 80}
          />
        );
      },
    },
  };
  return (
    <div className={`portableText`}>
      <PortableText value={data} components={components} />
    </div>
  );
};

export default CustomPortableText;
