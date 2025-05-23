import type { string } from "astro:schema";
import type { Block, Image } from "./_globals";

export interface General {
  string_name: string;
  img_logoNav: Image;
  string_brand: string;
  string_slogan: string;
  img_logoFooter: Image;
}
export interface Social {
  string_urlFacebook: string;
  string_urlInstagram: string;
  string_urlLinkedin: string;
}

export interface Contact {
  string_email: string;
  string_phone: string;
  string_address: string;
  string_addressMap: string;
  string_addressMapUrl: string;
}

export interface Policy {
  block_policy: Block[];
}
export interface Company {
  general: General;
  social: Social;
  contact: Contact;
  policy: Policy;
}
