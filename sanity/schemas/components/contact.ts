import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
      defineField({
        name: 'name',
        title: 'name',
        type: 'string',
      }),
      
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

  ],
preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

