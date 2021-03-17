// My First Project Start

/*
1. Make three different pieces of data for random answer.

Your sign is sun.

You are having good luck. 

You should: "trust no one"
*/

let messageBox = ['Your sign is sun.', 'You are having good luck.', 'You should: "trust no one"'];
   const randomNum = (message) => {   
      let num = Math.floor(Math.random(message) * 3)
      console.log(messageBox[num]);
   };
   randomNum(messageBox);