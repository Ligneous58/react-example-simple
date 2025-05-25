import logo from './logo.svg';
import './App.css';
import Posts from './page/Posts';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditPostPage from './page/EditPost';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/edit-post/:id" element={<EditPostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
