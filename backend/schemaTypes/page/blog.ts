export default {
  name: 'blog',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
  ],
  fields: [
    {
      name: 'seo',
      title: 'SEO',
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
          name: 'text_dscSeo',
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
      name: 'hero',
      title: 'Hero',
      group: 'hero',
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
          name: 'img_hero',
          title: 'Imagen de fondo',
          type: 'image',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'seo.string_titleSeo',
      subtitle: 'seo.text_descSeo',
      media: 'hero.img_bg',
    },
  },
}
