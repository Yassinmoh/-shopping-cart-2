import './CSS/index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {words} from './words'
function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        {words.Content}
      </main>
      <Footer/>

    </div>
  );
}

export default App;
