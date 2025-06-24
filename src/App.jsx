import { useEffect, useState } from 'react'
import JournalForm from './components/JournalForm'
import JournalList from './components/JournalList'

function App() {
    const [notes, setNotes] = useState(() => {
        const sauvegarde = localStorage.getItem('journal')
        return sauvegarde ? JSON.parse(sauvegarde) : []
    })
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        localStorage.setItem('journal', JSON.stringify(notes))
    }, [notes])

    const ajouterNote = (note) => {
        setNotes((prev) => [note, ...prev])
        setIsModalOpen(false)
    }

    const supprimerNote = (index) => {
        setNotes((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 backdrop-blur-xl text-zinc-900 dark:text-zinc-100 px-4 py-8 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="w-full h-full animate-gradient bg-[radial-gradient(circle_at_30%_30%,#a5b4fc,#f0abfc,#fef08a)] blur-3xl opacity-60" />
            </div>

            <div className="w-full max-w-4xl mx-auto">
                <header className="text-center mb-6">
                    <h1 className="text-4xl font-extrabold mb-2">📝 Journal de bord</h1>
                    <p className="text-zinc-600 dark:text-zinc-300">
                        Version React + Tailwind. ✨
                    </p>
                </header>

                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-zinc-800 dark:bg-white text-white dark:text-black px-6 py-2 rounded-full shadow hover:scale-105 transition"
                    >
                        Nouvelle note
                    </button>
                </div>

                <JournalList notes={notes} onDelete={supprimerNote} />

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-2xl w-full max-w-md">
                            <JournalForm onAdd={ajouterNote} onClose={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
