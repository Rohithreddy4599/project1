export async function GET() {
  return new Response(JSON.stringify({ status: "ok", timestamp: Date.now() }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}


