export default {
  name: 'postCategory',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'category',
      title: 'categoría',
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
          title: 'Título para posicionar esta categoría en buscadores',
          type: 'string',
          description:
            '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
          validation: (rule: any) =>
            rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
        },
        {
          name: 'text_descSeo',
          title: 'Descripción para posicionar esta categoría en buscadores',
          type: 'text',
          description:
            '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
          validation: (rule: any) =>
            rule.max(155).warning('Se han rebasado los 155 caracteres recomendados'),
        },
        {
          name: 'text_keySeo',
          title: 'Palabras clave para posicionar esta categoría en buscadores',
          type: 'text',
          description: '*Separar palabras con comas',
        },
      ],
    },
    {
      name: 'category',
      title: 'Categoría',
      group: 'category',
      type: 'object',
      fields: [
        {
          name: 'string_title',
          title: 'Nombre de la categoría',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'string_title',
            maxLength: 96,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'category.string_title',
      subtitle: 'category.slug.current',
    },
  },
}
