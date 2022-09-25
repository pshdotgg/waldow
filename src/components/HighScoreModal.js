import React, { useEffect, useState } from 'react'
import styles from '../styles/HighScoreModal.module.css'
import { useNavigate } from 'react-router-dom'
import HighScoreList from './HighScoreList'
import { scores } from '../data/scores'
import { sortHighScore } from '../util/sortHighScore'
import ScoreForm from './ScoreForm'
import { time, formatDuration } from './Timer'

const HighScoreModal = ({ id }) => {
  const [showForm, setShowForm] = useState(false)
  const [showHighScores, setShowHighScores] = useState(false)
  const highScores = sortHighScore(scores)

  useEffect(() => {
    if (time < highScores[highScores.length - 1][1] || highScores.length < 10)
      setShowForm(true)
  }, [])

  const navigate = useNavigate()
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {showForm && (
          <ScoreForm
            setShowHighScores={setShowHighScores}
            setShowForm={setShowForm}
            time={time}
            id={id}
          />
        )}
        {showHighScores && <HighScoreList />}

        <div className={styles['right-container']}>
          <span>Your Time</span>
          <span className={styles.time}>{formatDuration(time)}</span>
          <button
            className={styles['btn-restart']}
            onClick={() => navigate('/')}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  )
}

export default HighScoreModal
