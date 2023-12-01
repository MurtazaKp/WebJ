import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trivia',
  title: 'Triva',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    

    defineField({
        name:"TriviaInfo",
        title:"trivia",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
              defineField({
                name: 'trivia',
                title: 'Trivia',
                type: 'string',
              }),  
            ],
          }
        ],   
      }),

    
  ]})