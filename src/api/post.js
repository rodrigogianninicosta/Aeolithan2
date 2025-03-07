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
          level: storedCharInfo.level,
          currentExp: storedCharInfo.currentExp,
          nextLevelExp: storedCharInfo.nextLevelExp,
          health: storedCharInfo.health,
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
