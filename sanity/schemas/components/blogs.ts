import {defineField, defineType,defineArrayMember} from 'sanity'

export default defineType({
  name: 'post',
  title: 'posts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name: 'blogHeading',
        title: 'Blog Heading',
        type: 'string',
      }),

      
     
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
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: {
                  source: 'blogTitle',
                  maxLength: 96,
                },
              }),
              defineField({
                name: 'link',
                title: 'link text',
                type: 'object',
                fields:[
                  defineField({
                    name: 'label',
                    title: 'label',
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
                ]
              }),
              
          
          defineField({
            name: 'body',
            title: 'body',
            type: 'array',
            of: [
              defineArrayMember({
                title: 'Block',
                type: 'block',
              
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'H4', value: 'h4'},
                  {title: 'Quote', value: 'blockquote'},
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                marks: {
                
                  decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                  ],
                  annotations: [
                    {
                      title: 'URL',
                      name: 'link',
                      type: 'object',
                      fields: [
                        {
                          title: 'URL',
                          name: 'href',
                          type: 'url',
                        },
                      ],
                    },
                  ],
                },
              }),
              // You can add additional types here. Note that you can't use
              // primitive types such as 'string' and 'number' in the same array
              // as a block type.
              defineArrayMember({
                type: 'image',
                options: {hotspot: true},
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                  }
                ]
              }),
            ],
          })
  ],
        
          
      


preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
