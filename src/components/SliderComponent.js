import React from 'react'
import ImageGallery from 'react-image-gallery';


function SliderComponent() {
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
  return (
    <div className='z-30 w-m'>
        <ImageGallery items={images} lazyLoad={true} showFullscreenButton={false} showPlayButton={false}/>
    </div>
    
    )
}

export default SliderComponent