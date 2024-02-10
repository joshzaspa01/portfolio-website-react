import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar, Sidebar, Footer } from './components'
import { Home, Projects, About, Contact } from './pages'


function App() {
  
  return (
    <Router>
        <Navbar/>
        <Sidebar />
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App;