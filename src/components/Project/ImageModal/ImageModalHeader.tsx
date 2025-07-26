import { motion } from "framer-motion";

interface ImageModalHeaderProps {
  currentIndex: number;
  totalImages: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onClose: () => void;
}

export default function ImageModalHeader({
  currentIndex,
  totalImages,
  isFullscreen,
  onToggleFullscreen,
  onClose,
}: ImageModalHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative z-20 px-6 py-3 flex justify-between items-center"
    >
      <div className="text-white text-sm font-medium">
        {currentIndex + 1} / {totalImages}
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          onClick={onToggleFullscreen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center justify-center w-10 h-10 p-2 bg-white text-dark hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded"
          title={isFullscreen ? "Sair da tela cheia (F)" : "Tela cheia (F)"}
        >
          {isFullscreen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          )}
        </motion.button>

        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-10 h-10 p-2 bg-white text-dark hover:bg-gray-100 transition-all duration-200 cursor-pointer rounded text-2xl font-bold"
          title="Fechar (Esc)"
        >
          ×
        </motion.button>
      </div>
    </motion.div>
  );
}
