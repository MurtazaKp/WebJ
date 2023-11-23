import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name:"serviceHeading",
        title:'service Heading',
        type:'string',
      }),


       defineField({
        name:"services",
        title:"services",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              defineField({
                name: 'title',
                title: 'title',
                type: 'string',
              }),

              defineField({
                name: 'serviceDescription',
                title: 'Service Description',
                type: 'string',
              }),
              
            ],
          }
        ],   
      }),

      defineField({
        name:"button",
        title:"Service Button",
        type:"object",
        fields:[
            defineField({
              name:"href",
              title:'Href',
              type:'string'
            }),
            defineField({
              name:"target",
              title:'Target',
              type:'string'
            }),
            defineField({
              name:"label",
              title:'label',
              type:'string'
            }),
        ]
      })
  ]})