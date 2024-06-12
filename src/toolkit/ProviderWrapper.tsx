"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/toolkit/store";



export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
