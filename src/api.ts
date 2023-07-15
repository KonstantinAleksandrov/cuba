
const API_BASE_URL = 'localhost:5000'

export const signIn = async (signData: {tel?: string, password?: string}) => {
  const response = await fetch(`${API_BASE_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signData)
  })
  if(!response.ok) {
    throw new Error('HTTP Error! ' + response.status)
  }

  return await response.json()
}

export const getUserMe = async () => {
  const response = await fetch(`${API_BASE_URL}/me`)
  if(!response.ok) {
    throw new Error('HTTP Error! ' + response.status)
  }

  return await response.json()
}

