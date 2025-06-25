import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function MorphModal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0, scale: 0.8, borderRadius: '3rem' }}
                        animate={{ opacity: 1, scale: 1, borderRadius: '1rem' }}
                        exit={{ opacity: 0, scale: 0.8, borderRadius: '3rem' }}
                        transition={{
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 90,
                            damping: 20,
                        }}
                    >
                        <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white p-6 w-full max-w-lg shadow-xl rounded-3xl relative z-50">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-2xl hover:scale-125 transition-transform"
                            >
                                ✕
                            </button>
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
