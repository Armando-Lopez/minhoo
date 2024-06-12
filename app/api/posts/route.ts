import { NextResponse } from "next/server"

export async function GET() {
  try {
    const data = await fetch('http://103.43.75.41:8083/api/v1/post').then((r) => r.json());
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}