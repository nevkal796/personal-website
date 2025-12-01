import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

interface DarkModeToggleProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <FiSun className="w-6 h-6 text-yellow-500" />
        ) : (
          <FiMoon className="w-6 h-6 text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  )
}

