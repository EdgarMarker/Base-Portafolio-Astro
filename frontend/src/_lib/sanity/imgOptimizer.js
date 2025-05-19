import { sanityClient } from "sanity:client";

export const urlFor = (image) => {
  return sanityClient
    .image(image) 
    .quality(80) 
    .format("webp"); 
};

export const getResponsiveImageUrls = (image) => {

  const imageUrl = urlFor(image);

  const small = imageUrl.width(400).url(); 
  const medium = imageUrl.width(800).url(); 
  const large = imageUrl.width(1200).url();

  return { small, medium, large };
};
