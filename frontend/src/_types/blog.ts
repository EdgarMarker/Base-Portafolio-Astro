import type { BlockContent, Img } from "./_globals";

export interface Blog {
  titleseo: string;
  descseo: string;
  keyseo: string;
  heroBtn: string;
  heroH1: string;
  heroH2: BlockContent[];
  heroImg: Img;
  heroP: string;
}
