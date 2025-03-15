import axios from 'axios'

export const getCharacters = async (playerId, alignment) => {
  try {
    const response = await axios.get('http://localhost:8080/character', {
      headers: {
        playerId: playerId,
        alignment: alignment,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching customers:', error)
    return null
  }
}
