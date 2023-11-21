import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'About',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'subheading',
            title: 'subheading',
            type: 'string',
          }),

          defineField({
            name: 'heading',
            title: 'heading',
            type: 'string',
          }),
          defineField({
            name: 'description',
            title: 'description',
            type: 'string',
          }),

          defineField({
            name: 'sectionHeading',
            title: 'sectionHeading',
            type: 'string',
          }),

          defineField({
            name: 'sectionDescription',
            title: 'Section Description',
            type: 'array',
            of:[
                {
                    type:"object",
                    fields:[
                        defineField({
                            name: 'description',
                            title: 'description',
                            type: 'text',
                          }),
                    ]
                }
            ]
          }),

          // MeetTeam

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


            // Testimonial

      defineField({
        name: 'testimonialHeading',
        title: 'Testimonial Heading',
        type: 'string',
      }),

      defineField({
        name:"testimonials",
        title:"testimonials",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              defineField({
                name: 'review',
                title: 'review',
                type: 'string',
              }),
              defineField({
                name: 'reviewerName',
                title: 'Reviewer Name',
                type: 'string',
              }),
              defineField({
                name: 'AvatarImage',
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