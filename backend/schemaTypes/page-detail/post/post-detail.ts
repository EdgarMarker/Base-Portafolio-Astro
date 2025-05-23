export default {
  name: 'post',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'card',
      title: 'Tarjeta de articulo',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'page',
      title: 'Página de artículo',
    },
  ],
  fields: [
    {
      name: 'general',
      title: 'Información general',
      group: 'general',
      type: 'object',
      fields: [
        {
          name: 'string_title',
          title: 'Título del articulo',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug del articulo',
          type: 'slug',
          options: {
            source: 'string_title',
            maxLength: 96,
          },
        },
        {
          name: 'ref_author',
          title: 'Autor',
          type: 'reference',
          to: [{type: 'postAuthor'}],
        },
        {
          name: 'arrRef_category',
          title: 'Categoría del articulo',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'postCategory'}]}],
        },
        {
          name: 'dateTime_publishedAt',
          title: 'Fecha de publicación',
          type: 'datetime',
        },
      ],
    },
    {
      name: 'card',
      group: 'card',
      type: 'object',
      fields: [
        {
          name: 'text_excerpt',
          title: 'Extracto del articulo en la tarjeta',
          type: 'text',
        },
        {
          name: 'img_card',
          title: 'Imagen de la tarjeta del articulo',
          type: 'image',
        },
      ],
    },
    {
      name: 'seo',
      group: 'seo',
      type: 'object',
      fields: [
        {
          name: 'string_titleSeo',
          title: 'Título para posicionar esta página en buscadores',
          type: 'string',
          description:
            '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',

          validation: (rule: any) =>
            rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
        },
        {
          name: 'text_descSeo',
          title: 'Descripción para posicionar esta página en buscadores',
          type: 'text',
          description:
            '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',

          validation: (rule: any) =>
            rule.max(155).warning('Se han rebasado los 155 caracteres recomendados'),
        },
        {
          name: 'text_keySeo',
          title: 'Palabras clave para posicionar esta página en buscadores',
          type: 'text',
          description: '*Separar palabras con comas',
        },
      ],
    },
    {
      name: 'page',
      title: 'Pagina de articulo',
      group: 'page',
      type: 'object',
      fields: [
        {
          name: 'hero',
          type: 'object',
          fields: [
            {
              name: 'string_h1',
              title: 'Título principal',
              type: 'string',
            },
            {
              name: 'block_info',
              title: 'Información adicional',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'string_btn',
              title: 'Texto del botón',
              type: 'string',
            },
            {
              name: 'img_bg',
              title: 'Imagen de fondo',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'general.string_title',
      subtitle: 'general.slug.current',
      media: 'page.hero.img_bg',
    },
  },
}
