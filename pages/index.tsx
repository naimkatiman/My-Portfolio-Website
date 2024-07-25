// File: pages/index.tsx
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import AIChat from '../components/AIChat'

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




