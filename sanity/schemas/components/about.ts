import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'object',
  fields: [
    defineField({
        name: 'subheading',
        title: 'subheading',
        type: 'string',
      }),

      defineField({
        name: 'heading',
        title: 'heading',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'description',
        type: 'string',
      }),
      
      defineField({
        name: 'AboutImage',
        title: 'About Image',
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

      defineField({
        name: 'sectionHeading',
        title: 'sectionHeading',
        type: 'string',
      }),

      defineField({
        name: 'sectionDescription',
        title: 'Section Description',
        type: 'array',
        of:[
            {
                type:"object",
                fields:[
                    defineField({
                        name: 'description',
                        title: 'description',
                        type: 'text',
                      }),
                ]
            }
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

