import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'component',
    title: 'component',
    type: 'document',
    fields: [
      // Sections
      defineField({
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          { type: 'about' },
          { type: 'hero' },
          {type:'pricing'},
          { type: 'contact' },
          { type: 'cta' },
          { type: 'feature' },
          { type: 'meetTeam' },
          { type: 'statistics' },
          { type: 'testimonial' },
          { type: 'services' },
          { type: 'newsletter' },
          { type: 'blogDetails' },
          { type: 'header' },
          { type: 'footer' },
          { type: 'terms' },
          { type: 'partners' },







        ],
      }),
    ],
   
  });
