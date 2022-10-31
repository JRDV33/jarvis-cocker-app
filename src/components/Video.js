import React from 'react'

// const Video = ({ video }) => {
//   return (
//     <div className="videoCard">
//       <iframe
//         width="560"
//         height="315"
//         src={video.video}
//         title="YouTube video player"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       ></iframe>
//       <h4>{video.favoriteSong}</h4>
//       <p>{video.releaseDate}</p>
//     </div>
//   )
// }

const Video = ({ video }) => {
  return (
    <div className="videoCard">
      <iframe src={video.video}></iframe>
      <h4>{video.favoriteSong}</h4>
      <p>{video.releaseDate}</p>
    </div>
  )
}

export default Video
