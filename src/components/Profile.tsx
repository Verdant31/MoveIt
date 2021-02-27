import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {

    const { level } = useContext(ChallengesContext)
    return (
        <div className= {styles.profileContainer}>
            <img src = "https://github.com/Verdant31.png" alt = "João Piovesan" />
            <div>
                <strong>João Piovesan</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
        
    );
}