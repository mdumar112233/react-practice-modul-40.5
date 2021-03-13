import './App.css';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';
import MealDetail from './MealDetail/MealDetail';
import MealFinder from './MealFinder/MealFinder';

function App() {
  // const [likeColor, setLikeColor] = useState('');
  // const handleClick = () => {
  //   const color = likeColor ? '' : 'primary';
  //   setLikeColor(color);
  // }
  return (
    <div>
      {/* <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpIcon> */}
      <MealDetail></MealDetail>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
