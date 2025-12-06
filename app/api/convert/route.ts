import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const format = formData.get('format') as string

    if (!file || !format) {
      return NextResponse.json(
        { error: 'File and format are required' },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    let convertedBuffer: Buffer

    try {
      const sharpInstance = sharp(buffer)
      
      switch (format) {
        case 'png':
          convertedBuffer = await sharpInstance.png().toBuffer()
          break
        case 'jpg':
        case 'jpeg':
          convertedBuffer = await sharpInstance.jpeg().toBuffer()
          break
        case 'webp':
          convertedBuffer = await sharpInstance.webp().toBuffer()
          break
        case 'gif':
          convertedBuffer = await sharpInstance.gif().toBuffer()
          break
        case 'ico':
          convertedBuffer = await sharpInstance
            .resize(256, 256, {
              fit: 'contain',
              background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .png()
            .toBuffer()
          break
        default:
          throw new Error('Unsupported format')
      }

      return new NextResponse(convertedBuffer.buffer as ArrayBuffer, {
        headers: {
          'Content-Type': `image/${format}`,
          'Content-Disposition': `attachment; filename="converted.${format}"`,
        },
      })
    } catch (error) {
      console.error('Conversion error:', error)
      return NextResponse.json(
        { error: 'Error converting image. Make sure the input format is supported.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
} 