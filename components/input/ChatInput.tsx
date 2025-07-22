'use client'
import {
  AIInput,
  AIInputButton,
  AIInputModelSelect,
  AIInputModelSelectContent,
  AIInputModelSelectItem,
  AIInputModelSelectTrigger,
  AIInputModelSelectValue,
  AIInputSubmit,
  AIInputTextarea,
  AIInputToolbar,
  AIInputTools,
} from '@/components/ui/kibo-ui/ai/input'
import { GlobeIcon, MicIcon, PlusIcon } from 'lucide-react'
import { type FormEventHandler, useState } from 'react'

const models = [
  { id: 'gpt-4', name: 'GPT-4' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
  { id: 'claude-2', name: 'Claude 2' },
  { id: 'claude-instant', name: 'Claude Instant' },
  { id: 'palm-2', name: 'PaLM 2' },
  { id: 'llama-2-70b', name: 'Llama 2 70B' },
  { id: 'llama-2-13b', name: 'Llama 2 13B' },
  { id: 'cohere-command', name: 'Command' },
  { id: 'mistral-7b', name: 'Mistral 7B' },
]

const ChatInput = () => {
  const [text, setText] = useState<string>('')
  const [model, setModel] = useState<string>(models[0].id)
  const [status, setStatus] = useState<
    'submitted' | 'streaming' | 'ready' | 'error'
  >('ready')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (!text) return

    setStatus('submitted')
    setTimeout(() => setStatus('streaming'), 200)
    setTimeout(() => setStatus('ready'), 2000)
  }

  return (
    <AIInput
      onSubmit={handleSubmit}
      className='bg-black max-w-full text-white border border-white '
    >
      <AIInputTextarea
        className='bg-[#111] text-white border-white placeholder-gray-400'
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder='Ask me anything...'
      />
      <AIInputToolbar className='bg-black border-t border-gray-700'>
        <AIInputTools className='gap-2'>
          <AIInputButton className='text-white hover:bg-gray-800'>
            <PlusIcon size={16} />
          </AIInputButton>
          <AIInputButton className='text-white hover:bg-gray-800'>
            <MicIcon size={16} />
          </AIInputButton>
          <AIInputButton className='text-white hover:bg-gray-800'>
            <GlobeIcon size={16} />
            <span>Search</span>
          </AIInputButton>

          <AIInputModelSelect onValueChange={setModel} value={model}>
            <AIInputModelSelectTrigger className='bg-[#111] border border-white text-white hover:bg-gray-900'>
              <AIInputModelSelectValue />
            </AIInputModelSelectTrigger>
            <AIInputModelSelectContent className='bg-black text-white border border-gray-700'>
              {models.map((model) => (
                <AIInputModelSelectItem
                  key={model.id}
                  value={model.id}
                  className='hover:bg-gray-800'
                >
                  {model.name}
                </AIInputModelSelectItem>
              ))}
            </AIInputModelSelectContent>
          </AIInputModelSelect>
        </AIInputTools>

        <AIInputSubmit
          disabled={!text}
          status={status}
          className='text-white hover:bg-blue-600 bg-blue-500'
        />
      </AIInputToolbar>
    </AIInput>
  )
}

export default ChatInput
