import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import styles from '../styles/Dropdown.module.css'

function Dropdown() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <button
        className={styles.dropdown}
        onClick={() => setIsVisible(!isVisible)}
      >
        3
      </button>
      {isVisible && <DropdownMenu />}
    </>
  )
}

export default Dropdown