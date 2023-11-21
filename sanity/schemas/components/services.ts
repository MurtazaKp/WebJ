import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'object',
  fields: [
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
  ]})