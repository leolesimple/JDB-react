import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="w-full py-4 px-6 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 shadow flex justify-between items-center">
            <h1 className="font-bold text-xl">📘 Mon Journal</h1>
            <div className={"flex space-x-4"}>
                <Link to="/" className="text-sky-950 hover:underline dark:text-sky-300">
                    Accueil
                </Link>
                <Link to="/about" className="text-sky-950 hover:underline dark:text-sky-300">
                    À propos
                </Link>
            </div>

        </nav>
    )
}
