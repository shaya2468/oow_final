import React from 'react';
import ImageGallery from 'react-image-gallery';

class WooImages extends React.Component {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    render() {

        var imagesRecived = this.props.images;
        var imagesSend = [];

        imagesRecived.forEach(function (entry) {
            imagesSend.push({ original: entry.url, thumbnail: entry.url });
        });

        return (
            <div className="container-slider">
                <ImageGallery
                    items={imagesSend}
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
        );
    }

}

export default WooImages;