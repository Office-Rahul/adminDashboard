
import './App.css'
import Sidebar from './componets/Sidebar'
import Header from './componets/Header'
import Dashboard from './pages/Dashboard'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
     <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
         <Router>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
         </Router>
        </main>
      </div>
     </div>
    </>
  )
}

export default App
