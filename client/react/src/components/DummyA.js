import React from 'react';
import ImageGallery from 'react-image-gallery';
// const DummyA = () => (
//   <div>
//     This is the DummyA page!
//   </div>
// );



class DummyA extends React.Component {
  
   handleImageLoad(event) {
     console.log('Image loaded ', event.target)
   }
  
   render() {
  
     const images = [
       {
         original: 'https://goo.gl/R9xakP',
         thumbnail: 'http://lorempixel.com/250/150/nature/1/',
       },
       {
         original: 'http://lorempixel.com/1000/600/nature/2/',
         thumbnail: 'http://lorempixel.com/250/150/nature/2/'
       },
       {
         original: 'http://lorempixel.com/1000/600/nature/3/',
         thumbnail: 'http://lorempixel.com/250/150/nature/3/'
       }
     ]
  
     return (
       <div id="image-gallery-position-app">
        <ImageGallery
            items={images}
            slideInterval={2000}
            showThumbnails={false}
            useBrowserFullscreen={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            showNav={false}
            disableSwipe={false}
            onImageLoad={this.handleImageLoad}/>
         </div>
     );
   }
  
 }

 export default DummyA;