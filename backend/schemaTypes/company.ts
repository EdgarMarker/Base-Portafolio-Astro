export default {
  name: 'company',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'Información General',
    },
    {
      name: 'contact',
      title: 'Contacto',
    },
    {
      name: 'social',
      title: 'Redes Sociales',
    },
    {
      name: 'policy',
      title: 'Aviso de privacidad',
    },
  ],
  fields: [
    {
      name: 'general',
      title: 'Información General',
      group: 'general',
      type: 'object',
      fields: [
        {
          name: 'string_name',
          title: 'Nombre de la empresa',
          type: 'string',
        },
        {
          name: 'img_logoNav',
          title: 'Logo de navegación',
          type: 'image',
        },
        {
          name: 'string_brand',
          title: 'Marca de la empresa',
          type: 'string',
        },
        {
          name: 'string_slogan',
          title: 'Slogan de la empresa',
          type: 'string',
        },
        {
          name: 'img_logoFooter',
          title: 'Logo de pie de página',
          type: 'image',
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contacto',
      group: 'contact',
      type: 'object',
      fields: [
        {
          name: 'string_email',
          title: 'Email de contacto',
          type: 'string',
        },
        {
          name: 'string_phone',
          title: 'Teléfono de contacto',
          type: 'string',
        },
        {
          name: 'string_address',
          title: 'Dirección de la empresa',
          type: 'string',
        },
        {
          name: 'string_linkAddress',
          title: 'Enlace de dirección a google maps',
          type: 'string',
        },
      ],
    },
    {
      name: 'social',
      title: 'Redes Sociales',
      group: 'social',
      type: 'object',
      fields: [
        {
          name: 'string_urlFacebook',
          title: 'Facebook',
          type: 'string',
        },
        {
          name: 'string_urlInstagram',
          title: 'Instagram',
          type: 'string',
        },
        {
          name: 'string_urlYt',
          title: 'YouTube',
          type: 'string',
        },
        {
          name: 'string_urlLinkedIn',
          title: 'LinkedIn',
          type: 'string',
        },
      ],
    },
    {
      name: 'policy',
      title: 'Aviso de privacidad',
      group: 'policy',
      type: 'object',
      fields: [
        {
          name: 'block_policy',
          title: 'Política de privacidad',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
      ],
    },
  ],
  
}
