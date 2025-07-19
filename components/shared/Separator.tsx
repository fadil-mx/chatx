import { ReactNode } from 'react'

const SeparatorWithOr = ({ children }: { children?: ReactNode }) => {
  return (
    <div className='flex items-center w-full my-5 text-gray-500'>
      <div className='flex-grow border-t' />
      <span className='px-2 text-md font-bold'>{children ?? 'or'}</span>
      <div className='flex-grow border-t' />
    </div>
  )
}

export default SeparatorWithOr
