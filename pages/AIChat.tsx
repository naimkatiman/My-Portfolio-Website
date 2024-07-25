// File: components/AIChat.tsx
import { useState } from 'react'

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessages([...messages, `You: ${input}`])
    
    // Replace with actual AI chat integration
    const response = await fetch('/api/ai-chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    
    setMessages(prev => [...prev, `AI: ${data.reply}`])
    setInput('')
  }

  return (
    <div className="ai-chat">
      <h2>Chat with AI Assistant</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default AIChat