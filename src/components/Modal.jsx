import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div
                className="relative w-full max-w-lg p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl transform transition-all duration-300 scale-100 opacity-100"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}
