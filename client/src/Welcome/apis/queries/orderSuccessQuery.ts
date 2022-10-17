export const orderSuccessQuery = async (sessionId: string) => {
  const res = await fetch(`/api/v1/order/success?session_id=${sessionId}`)

  return res.json()
}
