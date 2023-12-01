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
import blogDetails from './schemas/components/blogDetails'
import header from './schemas/components/header'
import footer from './schemas/components/footer'
import terms from './schemas/terms'
import pricing from './schemas/components/pricing'
import partners from './schemas/components/partners'
import cookie from './schemas/components/cookie'
import error404 from './schemas/components/error404'
import faq from './schemas/components/faq'
import videoBanner from './schemas/components/videoBanner'
import trivia from './schemas/components/trivia'
import privacy from './schemas/privacy'
import security from './schemas/security'
import imageGallary from './schemas/components/imageGallary'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [components, about, blogs,cta,feature,hero,meetTeem,newsletter,statistics,testimonial,contact,services,blogDetails,header,footer,terms,pricing,partners,cookie,error404,faq,videoBanner,trivia,privacy,security,imageGallary],
}
