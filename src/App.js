import './App.css'
import albumArray from './data.json'
import Album from './components/Album'
import Video from './components/Video'
import Quote from './components/Quote'
import { useState } from 'react'
import AlbumList from './components/AlbumList'

const App = () => {
  const [quote, setQuote] = useState('Anything Goes')

  const getQuote = () => {
    let random = Math.floor(Math.random() * albumArray.length)
    let newQuote = albumArray[random].quote
    setQuote(newQuote)
  }

  return (
    <div className="App">
      <header className="header">
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
        {/* <img
          id="unionJack"
          src="https://previews.dropbox.com/p/thumb/ABtRQAZFE5jKuERVqAt8HOvFw5glPSxJ3-WowA53R0g_90nRlTp9g8MJPsfs7L3MqIDGMEFfMEqvx1p5mqoVUEM812OrIX2FW3oFypdf_sdBDpPijSBwc8nruc2liSXBM6SzjyOOlIv0uisFg_DzCXhU9egPjUFCLqHygeeB6jqsBiDr4AOupGVQDqYmDAuQ2cbJpwKFbGFBZyuEnUEUo6DaqRiIr75z170qhYrN14cRaEu1X9C7-LW0uBR0_a5GZlVofBG2rB8O9Do0ojdIVkybvkh1z8tjDec-cMGyBXY4tSlGYpMk60HprIBZlEqh0YAKu623qqSZgcfMtUXJqM5tQ0CPrw4hxRSEBIwFrTiQ3o0ootI4BXim6LULo6E5SY4/p.png"
          alt="Illustration of Jarvis Cocker"
        /> */}
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
        <p>This is a collection of favorite songs compiled in one list.</p>
        <div>
          {albumArray.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </div>
      </aside>
      <footer className=".footer">
        <p>Copyright JRDV 2023</p>
        <p>jennadelvigna@gmail.com</p>
      </footer>
    </div>
  )
}

export default App
