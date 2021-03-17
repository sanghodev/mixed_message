let messageBox = [
    'Your sign is sun.'
    
    , 
    
    'You are having good luck.'
    
    , 
    
    'You should: "trust no one"'

];
   const randomNum = (message) => {   
      let num = Math.floor(Math.random(message) * 3)
      console.log(messageBox[num]);
   };
   randomNum(messageBox);