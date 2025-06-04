export default {
  name: 'home',
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
    {
      name: 'intro',
      title: 'Introducción',
    },
    {
      name: 'rProducts',
      title: 'Productos recientes',
    },
    {
      name: 'testimonials',
      title: 'Testimonios',
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
          name: 'img_bg',
          title: 'Imagen de fondo',
          type: 'image',
        },
      ],
    },
    {
      name: 'intro',
      title: 'Introducción',
      group: 'intro',
      type: 'object',
      fields: [
        {
          name: 'string_h3',
          title: 'Subtítulo indicador',
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
          name: 'img_1',
          title: 'Imagen 1',
          type: 'image',
        },
        {
          name: 'img_2',
          title: 'Imagen 2',
          type: 'image',
        },
      ],
    },
    {
      name: 'rProducts',
      title: 'Productos recientes',
      group: 'rProducts',
      type: 'object',
      fields: [
        {
          name: 'arrRef_products',
          title: 'Productos recientes',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'product'}]}],
        },
      ],
    },
    {
      name: 'testimonials',
      title: 'Testimonios',
      group: 'testimonials',
      type: 'object',
      fields: [
        {
          name: 'arrRef_testimonials',
          title: 'Testimonios',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'testimonials'}]}],
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
