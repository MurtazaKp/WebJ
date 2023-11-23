import React from 'react'
import { urlForImage } from '@/lib/image';
import { PortableText } from '@portabletext/react';


const blogDetails = (props) => {


  return (
    <div className='w-8/12 mx-auto py-20'>
    <h1 className='text-6xl font-bold mb-10'>{props.title && props.title}</h1>
    <div>
        <img src={urlForImage(props.image.src).url()} alt={props.image.alt} className='rounded-3xl'  />
    </div>
   <div className='mt-10'>
   <PortableText value={props.body}/>
   </div>
</div>
  )
  
}

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `${process.env.SANITY_URL}query=${query}`;
  
  const data = await fetch(url).then((res) => res.json());
  const post = data.result[0];
  
  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.blogTitle,
        body: post.body,
        image: post.BlogImage,
      },
    };
  }
};


export default blogDetails


