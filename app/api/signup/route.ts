export async function POST(request: Request) {
  const body: unknown = await request.json();

  const data = await fetch("http://103.43.75.41:8083/api/v1/auth", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  }).then((r) => r.json());

  return Response.json({ data });
}
