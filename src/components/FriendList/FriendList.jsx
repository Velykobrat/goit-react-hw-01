import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friendListContainer}> {/* Змінено <ul> на <div> */}
      <ul className={styles.friendList}>
        {friends.map(({ id, ...friend }) => (
          <li key={id}>
            <FriendListItem {...friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
