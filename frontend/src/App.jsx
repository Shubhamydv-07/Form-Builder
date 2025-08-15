import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Preview from './pages/Preview';
import Navbar from './components/Navbar'
import PreviewList from './pages/PreviewList';
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <header className="bg-white shadow-sm">
        <div className="container-max mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="text-xl font-bold">FormBuilder</Link>
          <nav className="ml-auto flex gap-3">
            <Link to="/builder" className="text-sm text-gray-600 hover:text-gray-900">Create</Link>
          </nav>
        </div>
      </header>

      <main className="container-max mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/preview" element={<PreviewList />} />
          <Route path="/preview/:formId" element={<Preview />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
