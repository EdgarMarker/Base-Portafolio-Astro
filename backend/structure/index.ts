import type {StructureResolver} from 'sanity/structure'
import {DesktopIcon, HomeIcon} from '@sanity/icons'
import {FaRegBuilding, FaConciergeBell} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'
import {PiArticleNyTimesBold} from 'react-icons/pi'
import { AiOutlineProduct } from "react-icons/ai";

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem().icon(DesktopIcon).title('Inicio').child(
        S.documentTypeList('home') // Tipo de documento: pages
          .title('Inicio')
          .filter('_type == "home"'),
      ),
      S.listItem().icon(DesktopIcon).title('Productos').child(
        S.documentTypeList('products') // Tipo de documento: pages
          .title('Productos')
          .filter('_type == "products"'),
      ),
      S.listItem().icon(DesktopIcon).title('Nosotros').child(
        S.documentTypeList('about') // Tipo de documento: pages
          .title('Nosotros')
          .filter('_type == "about"'),
      ),
      S.listItem().icon(DesktopIcon).title('Blog').child(
        S.documentTypeList('blog') // Tipo de documento: pages
          .title('Blog')
          .filter('_type == "blog"'),
      ),
      S.listItem().icon(DesktopIcon).title('Contacto').child(
        S.documentTypeList('contact') // Tipo de documento: pages
          .title('Contacto')
          .filter('_type == "contact"'),
      ),

      S.divider(),

      S.listItem().icon(AiOutlineProduct).title('Lista de Productos').child(
        S.documentTypeList('product') // Tipo de documento: pages
          .title('Lista de Productos')
          .filter('_type == "product"'),
      ),
      S.listItem().icon(PiArticleNyTimesBold).title('Lista de Artículos').child(
        S.documentTypeList('post') // Tipo de documento: pages
          .title('Lista de Artículos')
          .filter('_type == "post"'),
      ),
      S.listItem().icon(FaConciergeBell).title('Lista de Amenidades').child(
        S.documentTypeList('amenities') // Tipo de documento: pages
          .title('Lista de Amenidades')
          .filter('_type == "amenities"'),
      ),

      S.listItem().icon(BiMessageDetail).title('Lista de Testimonios').child(
        S.documentTypeList('testimonials') // Tipo de documento: pages
          .title('Lista de Testimonios')
          .filter('_type == "testimonials"'),
      ),

      S.divider(),

      S.listItem()
        .icon(FaRegBuilding)
        .title('Empresa')
        .child(S.document().title('Empresa').schemaType('company').documentId('company')),
    ])
