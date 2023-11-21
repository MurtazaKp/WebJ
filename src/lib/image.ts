import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

const projectId ='u4gtpcrb'
const dataset='production'
const apiVersion='2022-03-07'


const imageBuilder = createImageUrlBuilder({
 projectId,
 dataset,   
});

export const urlForImage = (source: Image) => {
    return imageBuilder?.image(source).auto('format').fit('max');
  };