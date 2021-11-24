export async function handler(event) {
  console.log(event);
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! Good! Your request was received at ${event.requestContext.time}.`,
  };
}
