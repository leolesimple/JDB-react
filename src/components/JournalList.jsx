function JournalList({ notes, onDelete }) {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {notes.map((note, index) => (
                <div
                    key={index}
                    className="animate-note break-inside-avoid p-4 rounded-2xl border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-xl hover:shadow-2xl transition"
                >
                    {note.title && <h2 className="text-lg font-bold mb-1">{note.title}</h2>}
                    <p className="text-sm">{note.content}</p>
                    {note.image && <img src={note.image} alt="" className="mt-2 rounded-xl" />}
                    <button
                        onClick={() => onDelete(index)}
                        className="text-xs text-red-500 mt-2 hover:underline"
                    >
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    )
}

export default JournalList
