import Blogs from './components/Blogs/Blogs';
import CategorySearch from './components/CategorySearch/CategorySearch';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <CategorySearch />
      <hr></hr>
      <Home />
      <Blogs />
      <Features />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
