import React from 'react'
import Frame from '../components/frame'

const GalleryPage = () => {
  return (
    <div>
        <p>This will not be passed in as children231</p>
        <Frame>
            <p>This will be passed in as children</p>
        </Frame>
    </div>
  )
}

export default GalleryPage