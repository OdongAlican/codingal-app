/* eslint-disable radix */

import { useEffect, useState } from 'react';

const Timer = () => {
  const [watch, setWatch] = useState('00:00:00:00');
  const [timer, setTimer] = useState(false);
  let millisecond = 0;
  let second = 0;
  let minute = 0;
  let hour = 0;
  const run = () => {
    setWatch(`${hour < 10 ? `0${hour}` : hour}:
                        ${minute < 10 ? `0${minute}` : minute}:
                        ${second < 10 ? `0${second}` : second}:
                        ${millisecond < 10 ? `0${millisecond}` : millisecond}`);
    millisecond += 1;
    if (millisecond === 100) {
      millisecond = 0;
      second += 1;
    }
    if (second === 60) {
      second = 0;
      minute += 1;
    }
    if (minute === 60) {
      minute = 0;
      hour += 1;
    }
  };

  const startWatch = () => {
    if (!timer) {
      setTimer(setInterval(run, 10));
    }
  };

  const stopWatch = () => {
    clearInterval(timer);
    setTimer(false);

    const duration = (parseInt(watch.toString().split(':')[0].trim())
        + (parseInt(watch.toString().split(':')[1].trim()) / 60)
        + (parseInt(watch.toString().split(':')[2].trim()) / 3600)).toFixed(2);
    console.log(duration, 'information');
  };

  useEffect(() => {
    startWatch();
  }, []);

  console.log(stopWatch, 'information');

  return { stopWatch, watch };
};

export default Timer;
