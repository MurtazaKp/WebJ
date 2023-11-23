import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Cta',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name:"ctaTitle",
        title:'Cta Title',
        type:'string',
      }),
  
        defineField({
          name:"ctaButton",
          title:"Cta Button",
          type:"object",
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
         
        }),
  
  
        defineField({
          name:"ctaImage",
          title:"Cta Image",
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
  ]
})