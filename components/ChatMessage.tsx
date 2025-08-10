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
      className={`p-3 max-w-xl rounded-md ${
        isUser
          ? 'bg-blue-100 self-end ml-auto'
          : 'bg-gray-200 self-start mr-auto'
      }`}
    >
      <strong>{isUser ? 'You' : 'AI'}:</strong> {content}
    </div>
  )
}
