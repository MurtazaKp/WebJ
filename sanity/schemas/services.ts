import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'Services',
    title: 'Services',
    type: 'document',
    fields: [
         //Statistics

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
        ],   
      }),

    //   services

    defineField({
        name:"serviceHeading",
        title:'service Heading',
        type:'string',
      }),


       defineField({
        name:"services",
        title:"services",
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
                name: 'serviceDescription',
                title: 'Service Description',
                type: 'string',
              }),
              
            ],
          }
        ],   
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

           // Newsletter
      defineField({
        name:"NewsletterTitle",
        title:'Newsletter Title',
        type:'string',
      }),

      defineField({
        name: 'newsletterDescription',
        title: 'Newsletter Description',
        type: 'string',
      }),

      defineField({
        name:"ctaInput",
        title:"Cta Input",
        type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'label',
              type: 'string',
            }),
            defineField({
              name: 'placeholder',
              title: 'placeholder',
              type: 'string',
            }),
            defineField({
              name: 'button',
              title: 'Button Text',
              type: 'string',
            }),
          ],
      }),


       // blogs
       defineField({
        name: 'blogHeading',
        title: 'Blog Heading',
        type: 'string',
      }),

      
      defineField({
        name:"blogs",
        title:"Blogs",
        type: 'array',
        of:[
          {
            type:"object",
            
            fields: [
              defineField({
                name: 'BlogImage',
                title: 'Blog Image',
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

              defineField({
                name: 'date',
                title: 'date',
                type: 'string',
              }),

              defineField({
                name: 'author',
                title: 'author name',
                type: 'string',
              }),

              defineField({
                name:"blogTitle",
                title:'Blog Title',
                type:'string',
              }),
        
              defineField({
                name:"blogDescription",
                title:'Blog Description',
                type:'string',
              }),

              defineField({
                name:"href",
                title:'href',
                type:'string',
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