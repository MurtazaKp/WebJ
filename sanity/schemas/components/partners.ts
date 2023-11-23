import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partners',
  title: 'partners',
  type: 'object',
  fields: [
    defineField({
        name: 'name',
        title: 'name',
        type: 'string',
      }),

    defineField({
      name: 'heading',
      title: 'heading',
      type: 'string',
    }),
    
  
      defineField({
        name:"description",
        title:'Description',
        type:'string',
      }),


       defineField({
        name:"partnerLogo",
        title:"partner logo",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
                defineField({
                    name: 'logo',
                    title: 'logo',
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
        ],   
      }),

      
  ]})