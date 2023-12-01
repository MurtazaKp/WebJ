import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Faq',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name:"faqTitle",
        title:'Faq Title',
        type:'string',
      }),
  
      defineField({
        name:"faqs",
        title:'Faqs',
        type:'array',
        of:[
          {
            type: 'object',
            fields: [
              defineField({
                name: 'id',
                title: 'id',
                type: 'number',
              }),
              defineField({
                name: 'question',
                title: 'question',
                type: 'string',
              }),
              defineField({
                name: 'answer',
                title: 'answer',
                type: 'string',
              }),
              defineField({
                name: 'isOpen',
                title: 'isOpen',
                type: 'boolean',
              }),
            ],
          },
        ]
      }),
  ]
})