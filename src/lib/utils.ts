import axios from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const setAuthToken = async (token: string) => {
  await axios.get(`api/auth-token?auth=${token}`)
}
