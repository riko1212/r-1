import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  console.log(friends);
  const friendList = friends.map(el => {
    return (
      <FriendListItem
        key={el.id}
        avatar={el.avatar}
        name={el.name}
        status={el.isOnline}
      />
    );
  });
  // console.log(friendList);
  return friendList;
};
