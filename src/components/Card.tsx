import styles from '@/styles/Card.module.scss';

type Props = {
  children: React.ReactNode
  isMain?: boolean
}

const Card: React.FC<Props> = ({children, isMain = true}) => (
  <div className={`${styles.card} ${isMain ? styles.mainCard : styles.subCard}`}>
    {children}
  </div>
);

export default Card;