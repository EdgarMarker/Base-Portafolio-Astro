import React from "react";

export type ImageCategory = "xl" | "regular" | "small" | "custom";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  containerClassName?: string;
  category?: ImageCategory;
  quality: number;
  sizes?: string;
  priority?: boolean;
}

const CustomImg = ({
  containerClassName = "",
  category = "custom",
  quality,
  ...props
}: Props) => {
  const categoryConfig: Record<
    ImageCategory,
    {
      sizes: string;
      quality: number;
      priority?: boolean;
    }
  > = {
    xl: {
      sizes: "100vw",
      quality: 85,
      priority: true,
    },
    regular: {
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      quality: 80,
    },
    small: {
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw",
      quality: 75,
    },
    custom: {
      sizes: (props.sizes as string) || "100vw",
      quality: 80,
    },
  };

  const config = categoryConfig[category];
  const altText = props.alt || "";
  return (
    <picture className={`imgContainer ${containerClassName} radius__24`}>
      <img
        {...props}
        alt={altText}
        className="img"
        loading={
          props.priority !== undefined
            ? props.priority
              ? "eager"
              : "lazy"
            : config.priority
              ? "eager"
              : "lazy"
        }
      />
    </picture>
  );
};

export default CustomImg;
