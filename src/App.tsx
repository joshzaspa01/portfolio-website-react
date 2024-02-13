import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar, Footer } from './components'
import { Home, Projects, About, Contact } from './pages'
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  
  return (
    //SidebarContext
    <SidebarProvider>
      <Router>
          <Navbar/>
          <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />}/>
          </Routes>
          <Footer />
      </Router>
    </SidebarProvider>
  )
}

export default App;