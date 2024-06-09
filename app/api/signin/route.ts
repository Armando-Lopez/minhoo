import { signInSchema } from "@/lib/types"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body: unknown = await request.json()

  let response = {}
  let errors = {}
  let status = 201

  const validation = signInSchema.safeParse(body)
  if (!validation.success) {
    validation.error.issues.forEach((issue) => {
      errors = { ...errors, [issue.path[0]]: issue.message }
    })
    response = {
      errors
    }
    status = 400
  } else {
    response = {
      success: true
    }
  }

  return NextResponse.json(response, { status })

}