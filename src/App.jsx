import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './pages/Categories';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/bookstore-cms/" element={<Home />} />
          <Route path="/bookstore-cms/categories" element={<Categories />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">&copy; 2023 Bookstore CMS | Developed by Abdulali Noori</p>
      </footer>
    </>
  );
}

export default App;
