// File: pages/api/ai-chat.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body

  // Replace with actual AI chat logic
  const aiReply = `Thanks for your message: "${message}". This is a simulated AI response.`
  
  res.status(200).json({ reply: aiReply })
}