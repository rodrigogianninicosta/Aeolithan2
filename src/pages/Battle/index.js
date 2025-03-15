import { useState, useEffect } from 'react'
import { getCharacters } from '../../api/get'
import './style.css'
import CharCard from '../../components/CharCard'
import Button from '../../components/Button'

export default function Battle() {
  const [enemy, setEnemy] = useState([])
  const [char1, setChar1] = useState(JSON.parse(localStorage.getItem('party1')))
  const [char2, setChar2] = useState(JSON.parse(localStorage.getItem('party2')))
  const [char3, setChar3] = useState(JSON.parse(localStorage.getItem('party3')))
  const [damage1, setDamage1] = useState(0)
  const [damage2, setDamage2] = useState(0)
  const [damage3, setDamage3] = useState(0)

  useEffect(() => {
    const getCustomers = async () => {
      const data = await getCharacters('', 'evil')
      if (data) {
        setEnemy(data[0])
      }
    }
    getCustomers()
  }, [])

  useEffect(() => {
    setEnemy((prevEnemy) => ({
      ...prevEnemy,
      totalHealth: prevEnemy.totalHealth - damage1,
    }))
  }, [damage1])

  useEffect(() => {
    setEnemy((prevEnemy) => ({
      ...prevEnemy,
      totalHealth: prevEnemy.totalHealth - damage2,
    }))
  }, [damage2])

  useEffect(() => {
    setEnemy((prevEnemy) => ({
      ...prevEnemy,
      totalHealth: prevEnemy.totalHealth - damage3,
    }))
  }, [damage3])

  useEffect(() => {
    if (damage1 !== 0 && damage2 !== 0 && damage3 !== 0) {
      const randomIndex = Math.floor(Math.random() * 3)

      if (randomIndex === 0) {
        setChar1((prevChar) => ({
          ...prevChar,
          totalHealth: prevChar.totalHealth - 10,
        }))
      } else if (randomIndex === 1) {
        setChar2((prevChar) => ({
          ...prevChar,
          totalHealth: prevChar.totalHealth - 10,
        }))
      } else {
        setChar3((prevChar) => ({
          ...prevChar,
          totalHealth: prevChar.totalHealth - 10,
        }))
      }

      setDamage1(0)
      setDamage2(0)
      setDamage3(0)
    }
  }, [damage1, damage2, damage3])

  return (
    <div className="main-div battle">
      <div className="battle-cards">
        <CharCard key={`0`} {...enemy} bar={null} battleMode={true} />
      </div>
      <div className="mid-battle-div">
        <Button before="/home" />
        <div className="battle-div"></div>
        <div className="info-battle-div"></div>
      </div>
      <div className="battle-cards">
        <CharCard
          key={`1`}
          setDamage={setDamage1}
          {...char1}
          bar={null}
          battleMode={true}
        />
        <CharCard
          key={`2`}
          setDamage={setDamage2}
          {...char2}
          bar={null}
          battleMode={true}
        />
        <CharCard
          key={`3`}
          setDamage={setDamage3}
          {...char3}
          bar={null}
          battleMode={true}
        />
      </div>
    </div>
  )
}
