import { FC, PropsWithChildren, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface TooltipProps {
  content: string
  position: string
  className?: string
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ children, content, position }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg whitespace-pre text-center animate-slow-bounce ${position}`}
          >
            {content}
            <div
              className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip
