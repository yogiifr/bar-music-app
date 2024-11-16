import { axiosInstance } from "../src/lib/axios"
import { useAuth } from "@clerk/clerk-react"
import React from "react";
import { useEffect, useState } from "react"

import { Loader } from "lucide-react"

const updateApitoken = (token: string | null) => {
  if (token) axiosInstance.defaults.headers.common['Authorizations'] = `Bearer ${token}`;
  else delete axiosInstance.defaults.headers.common['Authorizations'];
}

const AuthProvider = ({children}:{children: React.ReactNode}) => {
  const {getToken} = useAuth()
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken()
        updateApitoken(token)
        
      } catch (error) {
        updateApitoken(null);
        console.log("Error in auth provider", error)
      } finally {
        setLoading(false);
      }
    }

    initAuth();
  }, [getToken]);

  if(loading) return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="size-8 text-orange-600 animate-spin"/>
    </div>
  )

  return <>{children}</>
}

export default AuthProvider