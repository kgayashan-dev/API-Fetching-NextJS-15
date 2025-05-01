/* eslint-disable @typescript-eslint/no-unused-vars */
// components/AuthStatus.tsx
'use client'

import { useEffect, useState } from 'react'
import { getAuthenticated } from '@/utils/checkAuthentication'
import { useRouter } from 'next/navigation'

export default function AuthStatus() {
  const [authState, setAuthState] = useState<{
    loading: boolean
    authenticated?: boolean
    user?: { username: string }
    error?: string
  }>({ loading: true })
  const router = useRouter()
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await getAuthenticated()
        
        if (result.authenticated) {
          setAuthState({
            loading: false,
            authenticated: true,
            user: result.user
          })
        } else {
          setAuthState({
            loading: false,
            authenticated: false,
            error: result.message || 'Not authenticated'
          })
        //   router.push('/login')
        }
      } catch (error) {
        setAuthState({
          loading: false,
          authenticated: false,
          error: 'Failed to check authentication'
        })
      }
    }

    checkAuth()
  }, [router])

  if (authState.loading) {
    return (
      <div className="p-4 text-center">
        <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        <span className="ml-2">Checking authentication...</span>
      </div>
    )
  }

  if (!authState.authenticated) {
    return (
      <div className="p-4 bg-red-100 text-green-700 rounded">
        {authState.error || 'You need to login'}
      </div>
    )
  }

  return (
    <div className="p-4 bg-green-100 text-green-700 rounded">
      Welcome, {authState.user?.username}!
    </div>
  )
}