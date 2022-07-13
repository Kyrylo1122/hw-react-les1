import './App.css';
import { Profile } from 'Components/Profile/Profile';
import user from './JSON/user.json';
import { Statistic } from 'Components/Statistics/Statistics';
import data from './JSON/data.json';
import { FriendList } from 'Components/FriendList/FriendList';
import friendsSet from './JSON/friends.json';
import { TransactionHistory } from 'Components/TransactionHistory/TransactionHistory';
import transactionsList from './JSON/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload title" stats={data} />
      <FriendList friends={friendsSet} />
      <TransactionHistory trans={transactionsList} />
    </>
  );
}

export default App;
