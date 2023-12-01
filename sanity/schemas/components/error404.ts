import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'error404',
  title: 'error404',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name:"Title",
        title:'Title',
        type:'string',
      }),

      defineField({
        name:"Description",
        title:'Description',
        type:'string',
      }),
  
       
     

        defineField({
            name:"Button",
            title:"button",
            type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'label',
                  type: 'string',
                }),
                defineField({
                  name: 'href',
                  title: 'Href',
                  type: 'string',
                }),
              ],
           
          }),
  ]
})