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
    <div
      className={`p-4 max-w-3xl rounded-lg whitespace-pre-wrap ${
        isUser
          ? 'bg-blue-600 text-white self-end ml-auto'
          : 'bg-gray-800 text-gray-100 self-start mr-auto'
      }`}
    >
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
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
  )
}
