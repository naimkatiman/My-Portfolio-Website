// File: pages/index.tsx
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../pages/Header'
import Hero from '../pages/Hero'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import AIChat from '../pages/AIChat'

const Home: React.FC = () => {
  const [aiGenerated, setAiGenerated] = useState<string>('')

  useEffect(() => {
    // Simulate AI-generated content (replace with actual AI integration)
    const generateAIContent = async () => {
      const response = await fetch('/api/generate-content')
      const data = await response.json()
      setAiGenerated(data.content)
    }
    generateAIContent()
  }, [])

  return (
    <div>
      <Head>
        <title>Your Name - AI-Powered Portfolio</title>
        <meta name="description" content="Full-stack developer with AI integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero aiContent={aiGenerated} />
        <About />
        <Projects />
        <Contact />
        <AIChat />
      </main>
    </div>
  )
}

export default Home




