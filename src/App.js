import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CountryStatisticDetail from "./pages/CountryStatisticDetail";
import NotFound from './pages/NotFound';

const App = () => {

  return (
    <div className='bg-slate-900 min-h-screen'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='country/:countryName' element={<CountryStatisticDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
