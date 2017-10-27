import React from 'react';
import ImageGallery from 'react-image-gallery';

class WooImages extends React.Component {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    render() {

        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
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

            // <div className="card">
                <div className="container-slider">
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
                        onImageLoad={this.handleImageLoad} />
                </div>
            // </div>

        );
    }

}

export default WooImages;