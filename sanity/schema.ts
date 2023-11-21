import { type SchemaTypeDefinition } from 'sanity'

import about from './schemas/components/about'
import blogs from './schemas/components/blogs'
import components from './schemas/components'
import cta from './schemas/components/cta'
import feature from './schemas/components/feature'
import hero from './schemas/components/hero'
import meetTeem from './schemas/components/meetTeem'
import newsletter from './schemas/components/newsletter'
import statistics from './schemas/components/statistics'
import testimonial from './schemas/components/testimonial'
import contact from './schemas/components/contact'
import services from './schemas/components/services'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [components, about, blogs,cta,feature,hero,meetTeem,newsletter,statistics,testimonial,contact,services],
}
