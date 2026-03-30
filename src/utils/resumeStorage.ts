export const DEFAULT_RESUME_PATH = '/resumefinal.pdf'
export const DEFAULT_RESUME_FILENAME = 'Nevin_Kalloor_Resume.pdf'
export const RESUME_STORAGE_KEY = 'portfolio_resume_v1'

export interface StoredResume {
  fileName: string
  mimeType: string
  base64: string
  updatedAt: string
}

export function getStoredResume(): StoredResume | null {
  try {
    const raw = window.localStorage.getItem(RESUME_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as StoredResume
  } catch {
    return null
  }
}

export function setStoredResume(resume: StoredResume) {
  window.localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(resume))
}

export function clearStoredResume() {
  window.localStorage.removeItem(RESUME_STORAGE_KEY)
}

export function base64ToUint8Array(base64: string): Uint8Array {
  const binary = window.atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes
}
