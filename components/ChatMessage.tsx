import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ChatMessage({
  role,
  content,
}: {
  role: string
  content: string
}) {
  const isUser = role === 'user'

  return (
    <div className=' max-w-5xl  mx-auto'>
      <div
        className={`p-4  whitespace-pre-wrap ${
          isUser
            ? ' bg-gray-800 rounded-2xl max-w-fit text-md text-white self-end ml-auto '
            : ' bg-[#171717] text-md  rounded-lg text-gray-100 self-start mr-auto'
        }`}
      >
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className='bg-gray-700 rounded px-1 py-0.5' {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}
