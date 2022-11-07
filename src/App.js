import './App.css'
import albumArray from './data.json'
import Album from './components/Album'
import Video from './components/Video'
import Quote from './components/Quote'
import { useState } from 'react'
// import AlbumList from './components/AlbumList'

const App = () => {
  const [quote, setQuote] = useState(
    'I am not Jesus, though I have the same initials.'
  )

  const getQuote = () => {
    let random = Math.floor(Math.random() * albumArray.length)
    let newQuote = albumArray[random].quote
    setQuote(newQuote)
  }

  return (
    <div className="App">
      <header className="header">
        <img
          id="unionJack"
          src="https://previews.dropbox.com/p/thumb/ABt-Ognz1C8yJO7xau8poq_Y6K1W0osy-JCfPyTQm3gaULQ8rMrgQgRzeLYMJJelrus-OavmUuldquFvGJseTCtfds0y9T1nG9-XPQr7nYLBkLsJme2OvMRWf59RDALaaQ94WyZdsu1IAlvIGpAKGyqeniHa9YOUdb-giGt44sBx5cH7Pqvcfwvd0mVapHbMM47YAcdBmgfrtrucfo27ZmSB4CrXKkl2G-Lo15pcUaIVvah2BEABY4qCC1bkXFR0nDYyOMJ3O1Gnzto4FZS2UbDn03AFAMIzcUiYQszTOkIEI98IDanLui3yiuA7I5q-K5BVLC_KHO4m5cao6qAEhiJsf4R1EEyHH2fJH3K1eHRid2SI3ncInNhJve78jfyq3CM/p.png"
          alt="Illustration of Jarvis Cocker"
        />
        <h1>Jarvis Cocker</h1>
        <p>
          Born 19 September 1963, Jarv... is an English musician,radio
          presenter, author, dj, and sex god. As the founder, frontman, lyricist
          and only consistent member of the band Pulp, he became a figurehead of
          the Britpop genre of the mid-1990s. Following Pulp's hiatus, Cocker
          pursued a solo career and is the king of side projects.
        </p>
        <div className="quote">
          <button onClick={getQuote}>New Quote</button>
          <Quote quote={quote} />
        </div>
      </header>
      <section className="pulp">
        <h2>PULP Music</h2>
        <div className="cards">
          {albumArray
            .filter((album) => album.category === 'Pulp')
            .map((album) => (
              <Album key={album.id} album={album} />
            ))}
        </div>
      </section>
      <section className="solo">
        <h2>Solo Music</h2>
        <div className="cards">
          {albumArray
            .filter((album) => album.category === 'solo')
            .map((album) => (
              <Album key={album.id} album={album} />
            ))}
        </div>
      </section>
      <section className="side">
        <h2>Side Projects</h2>
        <div className="cards">
          {albumArray
            .filter((album) => album.category === 'side')
            .map((album) => (
              <Album key={album.id} album={album} />
            ))}
        </div>
      </section>
      <aside className="mixtape">
        <h3>Mixtape</h3>
        {/* <img
          id="thinking"
          src="https://previews.dropbox.com/p/thumb/ABtthaQUKnzMCr5OKUH40pnZnaSnbBzF-NP42b3pwKKA8v2Nqo40V3q4FIQzz1gsmLYIop9Lb4PLqbtxIhTv14eNZvpczeIp2w_BAUA6K4ZsadMuJWGAxdJLq978LLVaSOx2zJ3yBEem-5tUbyj7qaTuVtXyrOvbu3zD69W3BZDqfRmtrbLVPyIG3sRDts-Q9FmcOEO6Gm8n3iLLIpKqGDGIY_b0w3p0jdNL0McR44gDGvFHzkGXs7eTtze5xNFWlfj5Gy4r76nCsjyigif_JdrotK6ihR6xNYve7ZHU1rPfDvBeqaqXDjVLPqOjqdwwcbkdF4_ivOeodmZogwrVi58mvqBmtpD05tskT2z8iTzhw5UJsPr7lZzBANr-sVLEDC8/p.png"
        /> */}
        <p>This is a collection of favorite songs compiled in one list.</p>
        <div>
          {albumArray.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </div>
      </aside>
      <footer className=".footer">
        <p id="whiteType">Copyright JRDV 2023</p>
        <p id="whiteType">jennadelvigna@gmail.com</p>
      </footer>
    </div>
  )
}

export default App
