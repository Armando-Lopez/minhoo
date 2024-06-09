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
    return NextResponse.json(response, { status })
  }

  const successResponse = await fetch('http://103.43.75.41:8083/api/v1/auth/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  }).then((r) => r.json());


  response = {
    success: successResponse
  }
  return NextResponse.json(response, { status })

}