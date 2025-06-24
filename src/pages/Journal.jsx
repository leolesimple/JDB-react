import { useEffect, useState } from 'react'
import JournalList from '../components/JournalList'
import Modal from '../components/Modal'
import JournalForm from '../components/JournalForm'

export default function Journal() {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem('journal')
        return saved ? JSON.parse(saved) : []
    })

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        localStorage.setItem('journal', JSON.stringify(notes))
    }, [notes])

    const ajouterNote = (note) => {
        setNotes((prev) => [...prev, note])
        setModalOpen(false)
    }

    const supprimerNote = (index) => {
        setNotes((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-6">
            <header className="text-center">
                <h2 className="text-4xl font-bold">📝 Journal de bord</h2>
                <p className="text-zinc-600 dark:text-zinc-300">
                    Rédige une note, ajoute une image, conserve tes réflexions de stage !
                </p>
            </header>

            <div className="flex justify-center">
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-100 hover:bg-blue-300 text-slate-900 font-semibold py-2 px-4 rounded-xl shadow"
                >
                    ➕ Ajouter une note
                </button>

                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <JournalForm
                        onAdd={(note) => {
                            ajouterNote(note)
                            setModalOpen(false)
                        }}
                    />
                </Modal>

            </div>

            <JournalList notes={notes} onDelete={supprimerNote} />
            {modalOpen && <Modal onAdd={ajouterNote} onClose={() => setModalOpen(false)} />}
        </div>
    )
}
