import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import { ProfileBoard } from "./ProfileBoard/ProfileBoard";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";



export const App = () => {
  return (
    <>
      <ProfileBoard user={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendsList friends={friends}/>
    </>
  );
};
