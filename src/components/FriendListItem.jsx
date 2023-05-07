export const FriendListItem = ({ avatar, name, status }) => {
  console.log(avatar);
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
