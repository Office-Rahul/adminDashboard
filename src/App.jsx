
import './App.css'
import Sidebar from './componets/Sidebar'
import Header from './componets/Header'
import Dashboard from './pages/Dashboard'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Distributor from './pages/Distributor'
import Users from './pages/Users'
import AmountRate from './pages/AmountRate'
import Results from './pages/Results'
import Sales from './pages/Sales'
import Commision from './pages/Commision'
import ChangePassword from './pages/ChangePassword'
import ResultSettings from './pages/ResultSettings'

function App() {
 

  return (
    <>
     <div className="flex ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
         <Router>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/distributor' element={<Distributor />} />
            <Route path='/users' element={<Users />} />
            <Route path='/amountrate' element={<AmountRate />} />
            <Route path='/results' element={<Results />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/commission' element={<Commision />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/resultsettings' element={<ResultSettings />} />
          
          </Routes>
         </Router>
        </main>
      </div>
     </div>
    </>
  )
}

export default App
