// FriendListItem.jsx

import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <div className={styles.friend}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${statusClass}`}>{statusText}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
