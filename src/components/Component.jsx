import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import styles from './Component.module.css'

library.add(fas)
const solidArray = Object.values(fas).map((icon) => icon.iconName)

function Component() {
  const [icon, setIcon] = useState('chess-queen')

  const showRandomIcon = () => {
    setTimeout(() => {
      setIcon(solidArray[Math.floor(Math.random() * solidArray.length)])
    }, 3000)
  }

  return (
    <div className={styles.container}>
      <div>
        <button onClick={showRandomIcon} className={styles.button}>
          Получить новую иконку
        </button>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </div>
      </div>
    </div>
  )
}

export default Component
