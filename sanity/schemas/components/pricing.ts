import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'object',
  fields: [
    defineField({
        name: 'name',
        title: 'name',
        type: 'string',
      }),

    defineField({
      name: 'subheading',
      title: 'subheading',
      type: 'string',
    }),
    
    defineField({
        name:"heading",
        title:'service Heading',
        type:'string',
      }),

      defineField({
        name:"mainDescription",
        title:'Main Description',
        type:'string',
      }),


       defineField({
        name:"pricingCard",
        title:"Pricing Card",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
              }),

              defineField({
                name: 'description',
                title: 'Description',
                type: 'string',
              }),

              defineField({
                name: 'Plan',
                title: 'Plan',
                type: 'string',
              }),
              
            ],
          }
        ],   
      }),

      
  ]})