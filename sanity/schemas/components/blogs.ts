import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'object',
  fields: [
    defineField({
        name: 'blogHeading',
        title: 'Blog Heading',
        type: 'string',
      }),

      
      defineField({
        name:"blogs",
        title:"Blogs",
        type: 'array',
        of:[
          {
            type:"object",
            
            fields: [
              defineField({
                name: 'BlogImage',
                title: 'Blog Image',
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
                name: 'date',
                title: 'date',
                type: 'string',
              }),

              defineField({
                name: 'author',
                title: 'author name',
                type: 'string',
              }),

              defineField({
                name:"blogTitle",
                title:'Blog Title',
                type:'string',
              }),
        
              defineField({
                name:"blogDescription",
                title:'Blog Description',
                type:'string',
              }),

              defineField({
                name:"href",
                title:'href',
                type:'string',
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
