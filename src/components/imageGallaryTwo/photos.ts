import { client } from "@/lib/sanity";
import { urlForImage } from "@/lib/image";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
async function getData() {
    const query = `*[_type == "component"]{
        sections[22]
      }`;
    const data = await client.fetch(query);
    return data;
  }

//   async function fetchData() {
//     try {
//         const data = await getData();
//         // Now 'data' contains the fetched information, and you can use it locally or pass it around.
//         console.log(data);

//         return data; // Return the data from the function
//     } catch (error) {
//         // Handle errors if necessary
//         console.error(error);
//     }
// }


const result = await getData().then((resp)=>{ return(resp)});

const photoData = result[0].sections.gallary










// const unsplashLink = (id: string, width: number, height: number) =>
//   `https://source.unsplash.com/${id}/${width}x${height}`;

// const unsplashPhotos = [
//   { id: "8gVv6nxq6gY", width: 1080, height: 800 },
//   { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
//   { id: "RkBTPqPEGDo", width: 1080, height: 720 },
//   { id: "Yizrl9N_eDA", width: 1080, height: 721 },
//   { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
//   { id: "Jztmx9yqjBw", width: 1080, height: 607 },
//   { id: "-heLWtuAN3c", width: 1080, height: 608 },

// ];

const photos = photoData.map((photo:any) => ({
  src: urlForImage(photo.gallaryImage.src).url(),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: urlForImage(photo.gallaryImage.src).url(),
      width: breakpoint,
      height,
    };
    
  }),
  
  
}));

export default photos;