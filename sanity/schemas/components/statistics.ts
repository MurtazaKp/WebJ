import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statistics',
  title: 'Statistics',
  type: 'object',
  fields: [
    defineField({
        name:"statisticsHeading",
        title:'stastics Heading',
        type:'string',
      }),

      defineField({
        name:"statisticsSubheading",
        title:'stastics subheading',
        type:'string',
      }),

      defineField({
        name:"stats",
        title:"stats",
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
                name: 'number',
                title: 'number',
                type: 'number',
              }),
              defineField({
                name: 'symbol',
                title: 'symbol',
                type: 'string',
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
