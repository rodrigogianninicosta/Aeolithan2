import axios from 'axios'

export const deleteCharacters = async (characterId) => {
  try {
    await axios.delete('http://localhost:8080/character', {
      headers: {
        characterId: characterId,
      },
    })
  } catch (error) {
    console.error('Error fetching customers:', error)
  }
}
