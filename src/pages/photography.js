import React from 'react'
import { render } from 'react-dom'
import imageData from '../storage/image-data'
import Lightbox from 'react-images'
import { fadeIn } from 'react-animations'
import { css, StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '5s',
  },
})

class Photography extends React.Component {
  constructor() {
    super()
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
  }
  
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  gotoImage(index, event) {
    this.setState({
      currentImage: index
    })
  }

  render() {
    let images = imageData
    const { currentImage, lightboxIsOpen } = this.state;
    return (
        <div className={css(styles.fadeIn)}>
      <section className="content pointer">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <img {...img} onClick={() => this.setState({ lightboxIsOpen: true, currentImage:i })}/>  
          </div>
        ))}
        <Lightbox
          images={images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          showThumbnails={true}
          onClickThumbnail={this.gotoImage}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </section>
      </div>
    )
  }
}

export default Photography