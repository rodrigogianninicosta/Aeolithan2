import axios from 'axios'

export const getCharacters = async (playerId) => {
  try {
    const response = await axios.get('http://localhost:8080/character', {
      headers: {
        playerId: playerId,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching customers:', error)
    return null
  }
}
