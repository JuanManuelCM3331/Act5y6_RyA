import Header from './componentes/Header'
import Info from './componentes/Info'
import Educacion from './componentes/Educacion'
import Experiencia from './componentes/Experiencia'
import Habilidades from './componentes/Habilidades'
import Footer from './componentes/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Info />
        <Educacion />
        <Experiencia />
        <Habilidades />
      </main>
      <Footer />
    </div>
  )
}

export default App
