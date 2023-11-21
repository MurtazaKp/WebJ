import Newsletter from '@/components/Newsletter'
import Statistics from '@/components/Statsistics'
import Blogs from '@/components/blogs'
import TourServicesCard from '@/components/services/services'
import Testimonial from '@/components/testimonial'
import React from 'react'

const services = () => {
  return (
   <div>
     <Statistics/>
    <TourServicesCard/>
    <Testimonial/>
    <Newsletter/>
    <Blogs/>
   </div>
  )
}

export default services