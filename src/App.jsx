import { Routes, Route } from 'react-router-dom'
import Journal from './pages/Journal'
import Navbar from './components/Nav'
import About from "./pages/About.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-zinc-200 text-zinc-900 relative overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(circle_at_30%_30%,#a5b4fc,#f0abfc,#fef08a)] blur-3xl opacity-60" />
            <Routes>
                <Route path="/" element={<Journal />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}
