import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File
  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const uploadDir = path.join(process.cwd(), 'uploads')
  await fs.mkdir(uploadDir, { recursive: true })
  const filePath = path.join(uploadDir, file.name)
  await fs.writeFile(filePath, buffer)
  return NextResponse.json({
    message: 'File uploaded successfully',
    filePath,
  })
}
