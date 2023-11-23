import {defineType, defineArrayMember, defineField} from 'sanity'
import blockContent from './blockContent'

export default defineType({
    name: 'terms',
    title: 'terms',
    type: 'object',
    fields: [
        defineField({
            name:"termsHeading",
            title:"Terms Heading",
            type:"string"
        }),

        defineField({
            name: 'terms',
            title: 'Terms',
            type: 'array',
            of: [
              defineArrayMember({
                title: 'Block',
                type: 'block',
              
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'H4', value: 'h4'},
                  {title: 'Quote', value: 'blockquote'},
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                marks: {
                
                  decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                  ],
                  annotations: [
                    {
                      title: 'URL',
                      name: 'link',
                      type: 'object',
                      fields: [
                        {
                          title: 'URL',
                          name: 'href',
                          type: 'url',
                        },
                      ],
                    },
                  ],
                },
              }),
              // You can add additional types here. Note that you can't use
              // primitive types such as 'string' and 'number' in the same array
              // as a block type.
              defineArrayMember({
                type: 'image',
                options: {hotspot: true},
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                  }
                ]
              }),
            ],
          })
        ]
        })
