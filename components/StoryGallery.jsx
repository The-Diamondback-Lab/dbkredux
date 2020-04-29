import React from 'react'
import ImageGallery from 'react-image-gallery'

export default class StoryGallery extends React.Component {
  constructor(props) {
    super(props)
    let images = []

    props.data.props.children.forEach(ele => {
      if (!ele.props || !ele.props.children) {
        return
      }
      let url = ele.props.children[1].props.children[1].props.children.props.src
      if (ele.props.children.length > 2) {
        let caption = ele.props.children[3].props.children
        caption.replace('\n', '')
        caption.replace('\t', '')
        images.push({
          original: url,
          description: caption
        })
      } else {
        images.push({
          original: url
        })
      }
    })
    this.state = ({ images: images })
  }

  render() {
    const { images } = this.state

    return (
      <ImageGallery items={images} showThumbnails={false} />
    )
  }
}
