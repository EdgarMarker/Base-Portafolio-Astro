import type { BlockContent, Img } from "./_globals";
import type { Product } from "./products-product";

export interface Inicio {
  titleseo: string;
  descseo: string;
  keyseo: string;
  heroH1: string;
  heroImg: Img;
  heroBtn: string;
  heroH2: BlockContent[];
  heroP: string;
  introH3: string;
  introH2: string;
  introBtn: string;
  introImg1: Img;
  introImg2: Img;
  introRichText: BlockContent[];
  recentProdRef: recentProd;
}

interface recentProd {
  recentProducts: Product[];
}
