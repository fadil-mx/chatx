// components/Logo4.tsx
interface Logo4Props {
  width?: number
  height?: number
  className?: string
}

export default function Logo4({
  width = 50,
  height = 50,
  className,
}: Logo4Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect width='200' height='200' rx='40' fill='url(#darkGradient)' />
      <rect
        x='50'
        y='60'
        width='100'
        height='60'
        rx='15'
        fill='#1f2937'
        stroke='#374151'
        strokeWidth='2'
      />
      <rect x='65' y='80' width='50' height='3' rx='1.5' fill='#9ca3af' />
      <rect x='65' y='90' width='70' height='3' rx='1.5' fill='#9ca3af' />
      <rect x='65' y='100' width='40' height='3' rx='1.5' fill='#9ca3af' />
      <defs>
        <linearGradient id='darkGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#111827' stopOpacity='1' />
          <stop offset='100%' stopColor='#1f2937' stopOpacity='1' />
        </linearGradient>
      </defs>
    </svg>
  )
}
