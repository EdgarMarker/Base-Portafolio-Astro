import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Astro-Base',

  projectId: 'kn09smx2',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (
        S: any, // Usamos 'any' si no tienes un tipo más específico para `S`
      ) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Empresa')
              .id('empresaAll')
              .child(
                S.list()
                  .title('Ajustes para la empresa')
                  .items([
                    S.listItem()
                      .title('Datos de la Empresa')
                      .child(S.document().schemaType('empresa').documentId('empresa')),
                    S.listItem()
                      .title('Social Media')
                      .child(S.document().schemaType('social').documentId('social')),
                    S.listItem()
                      .title('Aviso de Privacidad')
                      .child(S.document().schemaType('aviso').documentId('aviso')),
                  ]),
              ),
            S.listItem()
              .title('Secciones')
              .id('sectionsAll')
              .child(
                S.list()
                  .title('Ajustes para las secciones')
                  .items([
                    S.listItem()
                      .title('Inicio')
                      .id('home')
                      .child(S.document().schemaType('inicio').documentId('inicio')),
                    S.listItem()
                      .title('Nosotros')
                      .id('about')
                      .child(S.document().schemaType('nosotros').documentId('nosotros')),
                    S.listItem()
                      .title('Productos')
                      .id('productos')
                      .child(S.document().schemaType('productos').documentId('productos')),
                    S.listItem()
                      .title('Artículos')
                      .id('blog')
                      .child(S.document().schemaType('blog').documentId('blog')),
                    S.listItem()
                      .title('Contacto')
                      .id('contact')
                      .child(S.document().schemaType('contact').documentId('contact')),
                  ]),
              ),
            // Grupo de "Productos"
            S.listItem()
              .title('Lista de productos')
              .child(
                S.list()
                  .title('Gestión de Productos')
                  .items([
                    S.listItem()
                      .title('Productos')
                      .schemaType('products')
                      .child(S.documentTypeList('products').title('Productos')),
                    S.listItem()
                      .title('Categorías')
                      .schemaType('category')
                      .child(S.documentTypeList('category').title('Categorías')),
                  ]),
              ),
            // Grupo de "Artículos"
            S.listItem()
              .title('Lista de artículos de blog')
              .child(
                S.list()
                  .title('Gestión de artículos')
                  .items([
                    S.listItem()
                      .title('Artículos')
                      .schemaType('post')
                      .child(S.documentTypeList('post').title('Artículos')),
                    S.listItem()
                      .title('Categorías')
                      .schemaType('post-category')
                      .child(S.documentTypeList('post-category').title('Categorías')),
                    S.listItem()
                      .title('Autores')
                      .schemaType('author')
                      .child(S.documentTypeList('author').title('Autores')),
                  ]),
              ),
            // Filtra los elementos existentes de la lista
            ...S.documentTypeListItems().filter(
              (listItem: any) =>
                ![
                  'inicio',
                  'nosotros',
                  'productos',
                  'blog',
                  'contact',
                  'aviso',
                  'empresa',
                  'social',
                  'products',
                  'category',
                  'author',
                  'post',
                  'post-category',
                ].includes(listItem.getId()),
            ),
          ]),
    }),
    visionTool(),
    media()
  ],

  schema: {
    types: schemaTypes,
  },
})
