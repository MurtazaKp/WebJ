import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cookie',
  title: 'Cookie',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    
    defineField({
        name:"cookieTitle",
        title:'Cookie Title',
        type:'string',
      }),
    defineField({
      name:"cookieDescription",
      title:'Cookie Description',
      type:'string',
    }),

   
  
      defineField({
        name:"buttons",
        title:'Button',
        type:'array',
        of:[
          {
            type: 'object',
            fields: [
              defineField({
                name: 'button',
                title: 'button label',
                type: 'string',
              }),
            
            ],
          },
        ]
      }),

      defineField({
        name:"customSetting",
        title:'Custom Setting ',
        type:'array',
        of:[
          {
            type: 'object',
            fields: [
              defineField({
                name: 'customTilte',
                title: 'Custom Title',
                type: 'string',
              }),
            
            ],
          },
        ]
      }),

      defineField({
        name:"customSettingButtons",
        title:'Custom Setting Button',
        type:'array',
        of:[
          {
            type: 'object',
            fields: [
              defineField({
                name: 'customSettingButton',
                title: 'button label',
                type: 'string',
              }),
            
            ],
          },
        ]
      }),
  ]
})