import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
        name:"Footer",
        title:"name",
        type:"string"
    }),
    defineField({
        name:"navigationLinks",
        title:"navigationLinks",
        type: 'array',
        of:[
          {
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
          }
        ],   
      }),

      defineField({
        name:"copyright",
        title:"copyright",
        type:"string"
    }),
  ]})