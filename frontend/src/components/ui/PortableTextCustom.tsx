import { PortableText } from "@portabletext/react";
import React from "react";
import type { BlockContent } from "../../_types/_globals";

interface Props {
  data: BlockContent[];
}

const PortableTextCustom = ({ data }: Props) => {
  return <PortableText value={data} />;
};

export default PortableTextCustom;
