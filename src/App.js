import './App.css'
// import albums from './data.json'

const App = () => {
  return (
    <div className="App">
      <nav class="nav">
        <p>Home</p>
        <p>PULP</p>
        <p>Solo Albums</p>
        <p>Side Projects</p>
        <p>Mixtape</p>
      </nav>
      <header class="header">
        <h1>Jarvis Cocker</h1>
        <p>
          Born 19 September 1963, Jarv... is an English musician,radio
          presenter, author, dj, and sex god. As the founder, frontman, lyricist
          and only consistent member of the band Pulp, he became a figurehead of
          the Britpop genre of the mid-1990s. Following Pulp's hiatus, Cocker
          pursued a solo career and is the king of side projects.
        </p>
      </header>
      <section class="pulp">
        <h2>PULP</h2>
      </section>
      <section class="solo">
        <h2>Solo Albums</h2>
      </section>
      <section class="side">
        <h2>Side Projects</h2>
      </section>
      <footer>
        <p>Copyright JRDV 2023</p>
        <p>jennadelvigna@gmail.com</p>
      </footer>
    </div>
  )
}

export default App
