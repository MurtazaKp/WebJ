import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'videoBanner',
    title: 'video Banner',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
          }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),

          defineField({
            name: 'video',
            title: 'video',
            type: 'file',
            options: {
              accept: 'video/*', 
            },
          }),

        

       
        
    ],
    preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
})