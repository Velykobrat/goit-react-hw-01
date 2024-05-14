import styles from './Profile.module.css'; // імпортуємо файли стилів

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles['profile-container']}>
      <div>
        <img
          src={image}
          alt="User avatar"
          className={styles.avatar} // додаємо клас для аватара
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

<div className={styles.stats}>
  <div className={styles.stat}>
    <span className={styles['stat-name']}>Followers</span>
    <span className={styles['stat-value']}>{followers}</span>
  </div>
  <div className={styles.stat}>
    <span className={styles['stat-name']}>Views</span>
    <span className={styles['stat-value']}>{views}</span>
  </div>
  <div className={styles.stat}>
    <span className={styles['stat-name']}>Likes</span>
    <span className={styles['stat-value']}>{likes}</span>
  </div>
</div>

    </div>
  );
};

export default Profile;
