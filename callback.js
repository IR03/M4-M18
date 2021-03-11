 function explain_callback(name, age, task){
     console.log('Hello', name);
     console.log('Your age', age);
     task();
 }

 function washHand(){
     console.log('Wash hand with soap');
 }
 function takeShower(){
     console.log('Take shower');
 }

 
 explain_callback('Shagor',19, washHand);
 explain_callback('Shakil',17, takeShower);
