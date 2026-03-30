import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  DEFAULT_RESUME_FILENAME,
  DEFAULT_RESUME_PATH,
  clearStoredResume,
  getStoredResume,
  setStoredResume,
} from '../utils/resumeStorage'

const ADMIN_AUTH_KEY = 'portfolio_admin_authed'
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

export default function AdminResume() {
  const [password, setPassword] = useState('')
  const [isAuthed, setIsAuthed] = useState(() => window.sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true')
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [resume, setResume] = useState(() => getStoredResume())

  const statusText = useMemo(() => {
    if (!resume) return `Using default file: ${DEFAULT_RESUME_FILENAME}`
    return `Custom resume active: ${resume.fileName}`
  }, [resume])

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== ADMIN_PASSWORD) {
      setError('Incorrect password.')
      return
    }

    window.sessionStorage.setItem(ADMIN_AUTH_KEY, 'true')
    setIsAuthed(true)
    setError(null)
    setPassword('')
  }

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file.')
      return
    }

    setError(null)
    setIsSaving(true)

    try {
      const dataUrl = await readFileAsDataUrl(file)
      const base64 = dataUrl.split(',')[1]
      if (!base64) throw new Error('Unable to parse PDF file.')

      const nextResume = {
        fileName: file.name,
        mimeType: file.type,
        base64,
        updatedAt: new Date().toISOString(),
      }

      setStoredResume(nextResume)
      setResume(nextResume)
      event.target.value = ''
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : 'Failed to upload resume.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = () => {
    clearStoredResume()
    setResume(null)
    setError(null)
  }

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-[#1a1a1a] border border-cyan-500/30 rounded-xl p-6"
        >
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-gray-400 mb-6">Enter password to manage your resume.</p>

          <label htmlFor="admin-password" className="block text-sm text-gray-300 mb-2">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-gray-700 text-white focus:outline-none focus:border-cyan-500/60"
            autoFocus
          />

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            className="mt-5 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold"
          >
            Unlock Admin
          </button>
        </motion.form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-20">
      <div className="max-w-2xl mx-auto bg-[#1a1a1a] border border-cyan-500/30 rounded-xl p-6">
        <h1 className="text-3xl font-bold text-white mb-2">Resume Admin</h1>
        <p className="text-gray-400 mb-6">Upload a new PDF or delete the custom file to fall back to the default resume.</p>

        <div className="mb-6 p-4 rounded-lg bg-[#111111] border border-gray-800">
          <p className="text-cyan-300">{statusText}</p>
          <p className="text-xs text-gray-500 mt-2">Default path: {DEFAULT_RESUME_PATH}</p>
          {resume?.updatedAt && <p className="text-xs text-gray-500 mt-1">Last updated: {new Date(resume.updatedAt).toLocaleString()}</p>}
        </div>

        <label htmlFor="resume-upload" className="block text-sm text-gray-300 mb-2">
          Upload New Resume (PDF)
        </label>
        <input
          id="resume-upload"
          type="file"
          accept="application/pdf"
          onChange={handleUpload}
          disabled={isSaving}
          className="w-full text-gray-300 file:mr-4 file:rounded-md file:border-0 file:px-4 file:py-2 file:bg-cyan-500/20 file:text-cyan-300 file:cursor-pointer"
        />

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 rounded-lg border border-red-500/40 text-red-300 hover:bg-red-500/10 transition-colors"
          >
            Delete Custom Resume
          </button>
          <a
            href="/"
            className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-colors"
          >
            Back to Site
          </a>
        </div>
      </div>
    </div>
  )
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(new Error('Could not read uploaded file.'))
    reader.readAsDataURL(file)
  })
}
