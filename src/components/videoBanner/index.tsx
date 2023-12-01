import React, { useState, useEffect } from 'react';
import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';
import { client } from '@/lib/sanity';
import ReactPlayer from 'react-player';


async function getData() {
  const query = `*[_type == "component"]{
    sections[18]
  }`;
  const data = await client.fetch(query);
  return data;
}

const VideoBannerComponent = () => {
  const [videoData, setVideoData] = useState<any>({});
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setVideoData(result[0]?.sections);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  


  
  const assetIdParts =videoData.video && parseAssetId( videoData.video.asset._ref);

  const options = { projectId: 'u4gtpcrb', dataset: 'production' }; 


  const videoUrl =assetIdParts && buildFileUrl(assetIdParts, options);
//   console.log(videoUrl,'xxxxxxxxxxxxxxxx');
  

  return (
    <div className='py-20 container mx-auto flex justify-center gap-10 flex-col items-center'>
      <h2 className='text-center text-5xl mb-5'>{videoData?.title}</h2>
      <div className='w-8/12'>
     { hasWindow && <ReactPlayer config={{ file: { attributes: {
    autoPlay: true,
    muted: true
  }}}}
 muted autoPlay={true} width='100%' height="100%"  controls loop url={videoUrl} />}
     </div>
    </div>
  );
};

export default VideoBannerComponent;
