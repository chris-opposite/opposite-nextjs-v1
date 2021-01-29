import React from 'react'
import ReactPlayer from 'react-player/lazy'

const Video = ({ url }) => {
  return (
    <div className='relative overflow-hidden'>
      <ReactPlayer
        url={url}
        loop={true}
        muted={true}
        config={{
          file: {
            attributes: {
              autoPlay: 1,
              playsInline: 1,
            },
          },
        }}
        style={{ position: 'relative' }}
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default Video
