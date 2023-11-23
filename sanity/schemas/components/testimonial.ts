import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name: 'testimonialHeading',
        title: 'Testimonial Heading',
        type: 'string',
      }),

      defineField({
        name:"testimonials",
        title:"testimonials",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              defineField({
                name: 'review',
                title: 'review',
                type: 'string',
              }),
              defineField({
                name: 'reviewerName',
                title: 'Reviewer Name',
                type: 'string',
              }),
              defineField({
                name: 'AvatarImage',
                title: 'Avtatar Image',
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

