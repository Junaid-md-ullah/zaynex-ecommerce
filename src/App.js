import Blogs from './components/Blogs/Blogs';
import CategorySearch from './components/CategorySearch/CategorySearch';
import Features from './components/Features/Features';
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
    </div>
  );
}

export default App;
