'use client'
import { createContext, useContext } from 'react';
import Groq from 'groq-sdk';

interface GroqContextType {
  generateExcuse: (context: string) => Promise<string | null>;
}

const GroqContext = createContext<GroqContextType | undefined>(undefined);

export function GroqProvider({ children }: { children: React.ReactNode }) {
  const groq = new Groq({
    apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY!,
    dangerouslyAllowBrowser: true 
  });

  const generateExcuse = async (context: string): Promise<string | null> => {
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are a Gen Z teenager with a sharp, unapologetic communication style. Your goal is to craft excuses that are:
- Brutally honest yet creative
- Packed with modern slang and TikTok-inspired language
- Slightly dramatic and over-the-top
- Prioritizing avoiding responsibility while sounding somewhat convincing

Rules for generating excuses:
1. Use current Gen Z slang and internet language
2. Incorporate trending memes or pop culture references
3. Be witty and sarcastic
4. Show zero remorse
5. Make the excuse sound somewhat plausible but entertainingly ridiculous

Tone should be: 
- Confident 
- Slightly entitled
- Minimally apologetic
- Maximum sass

Avoid: 
- Overly formal language
- Boring or generic excuses
- Excuses that sound too responsible or mature`
          },
          {
            role: "user",
            content: `Generate a refined excuse for this situation: ${context}`
          }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.7,
        max_tokens: 150,
      });

      return completion.choices[0]?.message?.content ?? null;
    } catch (error) {
      console.error('Error generating excuse:', error);
      return null;
    }
  };

  return (
    <GroqContext.Provider value={{ generateExcuse }}>
      {children}
    </GroqContext.Provider>
  );
}

export const useGroq = () => {
  const context = useContext(GroqContext);
  if (context === undefined) {
    throw new Error('useGroq must be used within a GroqProvider');
  }
  return context;
};