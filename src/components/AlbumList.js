// import React from 'react'

// const AlbumList = ({ albumList }) => {
//   return (
//     <div className="cards">
//       {albumArray
//         .filter((album) => album.category === 'side')
//         .map((album) => (
//           <Album key={album.id} album={album} />
//         ))}
//     </div>
//   )
// }

// export default AlbumList
// import albumArray from '../data.json'
// import Album from './Album'

// const AlbumList = () => {
//   let featureList = ['Pulp', 'solo', 'side']
//   for (let i = 0; i < featureList.length; i++) {
//     return (
//       <section className={featureList[i]}>
//         <h2>{featureList[i]} Music</h2>
//         <div className="cards">
//           {albumArray
//             .filter((album) => album.category === featureList[i])
//             .map((album) => (
//               <Album key={album.id} album={album} />
//             ))}
//         </div>
//       </section>
//     )
//   }
// }

// export default AlbumList
