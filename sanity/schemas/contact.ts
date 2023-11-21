import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
        name:"contactHeading",
        title:'contactHeading',
        type:'string',
      }),

      defineField({
        name:"formFields",
        title:"formFields",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              defineField({
                name: 'label',
                title: 'label',
                type: 'string',
              }),

              defineField({
                name: 'type',
                title: 'type',
                type: 'string',
              }),

              defineField({
                name: 'name',
                title: 'name',
                type: 'string',
              }),

              defineField({
                name: 'placeholder',
                title: 'placeholder',
                type: 'string',
              }),  
            ],
          }
        ],   
      }),

      defineField({
        name: 'message',
        title: 'message',
        type: 'string',
      }),  

      defineField({
        name: 'termsDescription',
        title: 'Term Description',
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
        name:"image",
        title:"image",
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
      }),

       // Testimonial

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