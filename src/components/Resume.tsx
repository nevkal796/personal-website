import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiDownload } from 'react-icons/fi'
import { Document, Page, pdfjs } from 'react-pdf'

// Configure PDF.js worker
// Using unpkg CDN which is more reliable
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

// Configurable resume path - update this if you change the PDF filename
const RESUME_PATH = '/resumefinal.pdf'
const RESUME_FILENAME = 'Nevin_Kalloor_Resume.pdf'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [pageWidth, setPageWidth] = useState<number>(800)

  // Set page width based on viewport
  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(window.innerWidth > 768 ? 800 : Math.min(window.innerWidth - 64, 800))
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const [loadingError, setLoadingError] = useState<string | null>(null)

  const onDocumentLoadSuccess = () => {
    setLoadingError(null)
  }

  const onDocumentLoadError = (error: Error) => {
    console.error('PDF load error:', error)
    setLoadingError(error.message || 'Failed to load PDF')
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = RESUME_PATH
    link.download = RESUME_FILENAME
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <section id="resume" ref={ref} className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mx-auto shadow-glow-sm mb-8"></div>
          

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-cyan-500/20 rounded-xl p-4 md:p-6 shadow-glow overflow-hidden"
        >
          <div className="flex justify-center w-full">
            <Document
              file={RESUME_PATH}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center py-20">
                  <div className="text-cyan-400 text-lg">Loading resume...</div>
                </div>
              }
              error={
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="text-red-400 text-lg mb-2">Failed to load resume</div>
                  <div className="text-gray-400 text-sm mb-2">Please ensure {RESUME_PATH} exists in the public folder</div>
                  {loadingError && (
                    <div className="text-gray-500 text-xs mt-2">Error: {loadingError}</div>
                  )}
                </div>
              }
            >
              <Page
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={pageWidth}
                className="!max-w-full"
              />
            </Document>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <motion.a
            href={RESUME_PATH}
            download={RESUME_FILENAME}
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold shadow-glow-button hover:shadow-glow-lg transition-all duration-300"
          >
            <FiDownload className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

