import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'meetTeam',
  title: 'MeetTeam',
  type: 'object',
  fields: [
    
    defineField({
        name: 'meetTeam',
        title: 'Meet Team Heading',
        type: 'string',
      }),

      defineField({
        name:"team",
        title:"Team Members",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              
              defineField({
                name: 'teamMemberName',
                title: 'Team Member Name',
                type: 'string',
              }),
              defineField({
                name: 'teamMemberImage',
                title: 'Avtatar Image',
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

