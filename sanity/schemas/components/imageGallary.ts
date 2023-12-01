import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageGallary',
  title: 'Image Gallary',
  type: 'object',
  fields: [

    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name: 'mainTitle',
        title: 'Main Title',
        type: 'string',
      }),

      defineField({
        name:"gallary",
        title:"Gallary",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              
              defineField({
                name: 'id',
                title: 'id',
                type: 'number',
              }),

              defineField({
                name: 'width',
                title: 'width',
                type: 'number',
              }),

              defineField({
                name: 'height',
                title: 'height',
                type: 'number',
              }),

              defineField({
                name: 'gallaryImage',
                title: 'Gallary Image',
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

