import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),

      defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
      }),
    
      defineField({
        name: 'button',
        title: 'Button',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string',
              }),
              defineField({
                name: 'href',
                title: 'href',
                type: 'string',
              }),
              defineField({
                name: 'target',
                title: 'Target',
                type: 'string',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'heroImage',
        title: 'Hero Image',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
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
            ],
          },
        ],
      }),
  ]
})


