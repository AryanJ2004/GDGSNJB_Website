import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIsGDSC from './components/WhatIsGDSC'
import Technologies from './components/Technologies'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Loading from './components/Loading'
import TeamCarousel from './components/TeamCarousel'
import Events from './components/Events'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <WhatIsGDSC />
        <Technologies />
        <Events/>
        <TeamCarousel/>
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  )
}