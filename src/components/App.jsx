import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";
import { ProfileBoard } from "./ProfileBoard/ProfileBoard";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";



export const App = () => {
  return (
    <>
      <ProfileBoard user={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendsList friends={friends}/>
      <TransactionHistory transactions={transactions} />
    </>
  );
};
