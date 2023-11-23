import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
         // Newsletter
      defineField({
        name:"NewsletterTitle",
        title:'Newsletter Title',
        type:'string',
      }),

      defineField({
        name: 'newsletterDescription',
        title: 'Newsletter Description',
        type: 'string',
      }),

      defineField({
        name:"NewsletterInput",
        title:"Newsletter Input",
        type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'label',
              type: 'string',
            }),
            defineField({
              name: 'placeholder',
              title: 'placeholder',
              type: 'string',
            }),
            defineField({
              name: 'button',
              title: 'Button Text',
              type: 'string',
            }),
          ],
      }),

      defineField({
        name: 'newsletter',
        title: 'Newsletter Image',
        type: 'object',
        fields:[
          defineField({
            name: 'src',
            title: 'Source',
            type: 'image',
          }),
          defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          }),
        ]
      }),
  ],
preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
