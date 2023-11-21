import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
        name:"featureTitle",
        title:'Feature Title',
        type:'string',
      }),
  
      defineField({
        name:"features",
        title:'Features',
        type:'array',
        of:[
          {
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'title',
                type: 'string',
              }),
              defineField({
                name: 'description',
                title: 'description',
                type: 'string',
              }),
            ],
          },
        ]
      }),
  ]
})