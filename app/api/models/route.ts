import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('http://localhost:11434/api/tags')
    const data = await res.json()
    return NextResponse.json({
      message: 'Tags fetched successfully',
      models: data.models || [],
    })
  } catch (error) {
    console.error('Error fetching tags:', error)
    return NextResponse.json(
      { message: 'Error fetching tags', models: [] },
      { status: 500 }
    )
  }
}
