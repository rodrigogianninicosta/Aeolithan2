import axios from 'axios'

export const postCharacters = async (playerId) => {
  try {
    const storedCharInfo = JSON.parse(localStorage.getItem('charInfo'))
    await axios.post(
      'http://localhost:8080/character',
      [
        {
          name: storedCharInfo.name,
          imageName: storedCharInfo.imageName,
          currentEvolution: storedCharInfo.currentEvolution,
          classType: storedCharInfo.classType,
          race: storedCharInfo.race,
          collection: storedCharInfo.collection,
          alignment: storedCharInfo.alignment,
          level: storedCharInfo.level,
          currentExp: storedCharInfo.currentExp,
          nextLevelExp: storedCharInfo.nextLevelExp,
          totalHealth: storedCharInfo.totalHealth,
          currentHealth: storedCharInfo.currentHealth,
          totalMana: storedCharInfo.totalMana,
          currentMana: storedCharInfo.currentMana,
          attack: storedCharInfo.attack,
          magic: storedCharInfo.magic,
          defense: storedCharInfo.defense,
          speed: storedCharInfo.speed,
        },
      ],
      {
        headers: {
          'Content-Type': 'application/json',
          playerId: playerId,
        },
      },
    )
  } catch (error) {
    console.error('Error posting characters:', error)
  }
}
