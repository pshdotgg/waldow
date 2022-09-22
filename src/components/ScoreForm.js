import React, { useState } from 'react'
import { scores } from '../data/scores'
import styles from '../styles/ScoreForm.module.css'

const ScoreForm = ({ setShowHighScores, setShowForm, time }) => {
  const [username, setUsername] = useState('')

  const handleSubmit = () => {
    scores[username] = time
    setShowForm(false)
    setShowHighScores(true)
  }
  return (
    <div>
      <form action='/' className={styles.form} onSubmit={handleSubmit}>
        <div className={styles['input-container']}>
          <label htmlFor='username' className={styles.label}>
            Enter username to save your score
          </label>
          <input
            type='text'
            className={styles.input}
            name='username'
            id='username'
            placeholder='John'
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <button type='submit' className={styles['btn-submit']}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ScoreForm
