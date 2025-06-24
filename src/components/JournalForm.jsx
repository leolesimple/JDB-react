import { useState } from 'react'

function JournalForm({ onAdd, onClose }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!content.trim()) return
        onAdd({ title, content, image })
        setTitle('')
        setContent('')
        setImage(null)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded border bg-zinc-100 dark:bg-zinc-800"
                />
            </div>
            <div>
        <textarea
            placeholder="Écris ta note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 rounded border h-28 bg-zinc-100 dark:bg-zinc-800"
        />
            </div>
            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0]
                        const reader = new FileReader()
                        reader.onloadend = () => setImage(reader.result)
                        if (file) reader.readAsDataURL(file)
                    }}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                />
            </div>
            <div className="flex justify-between">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Ajouter
                </button>
                <button type="button" onClick={onClose} className="text-zinc-500 hover:underline">
                    Annuler
                </button>
            </div>
        </form>
    )
}

export default JournalForm
