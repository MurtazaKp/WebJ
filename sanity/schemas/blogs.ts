  
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'Blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
  // blogs
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
            name:"href",
            title:'href',
            type:'string',
          }),

          defineField({
            name:"link",
            title:"link",
            type:'object',
            fields:[
                defineField({
                    name:'linkLabel',
                    title:'Link Label',
                    type:"string"
                }),

                defineField({
                    name:'linkHref',
                    title:'Link Href',
                    type:"string"
                })

            ]
          })
          
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