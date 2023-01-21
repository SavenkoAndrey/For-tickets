
const ticetsCost = 25;

 
function isPossibleToGiveChange(banknotesArray) {
 
    let bank = 0;
    let changeValueA = 0;
    let changeValueB = 0;
    let changeA = 25;
    let changeB = 50;
    let banknotesArrays = [25, 50, 100];
 
    for(let i = 0; i < banknotesArray.length; i++){
         if(banknotesArray[0] > ticetsCost){
            return false;
         }if(banknotesArray[i] == banknotesArrays[0]) {
            bank += 25;
            changeValueA += changeA;   
         }if (changeValueA < 25){
            return false;   
         }else if (banknotesArray[i] == banknotesArrays[1] ) {         
            changeValueA -= changeA;
            changeValueB += changeB;
            bank += 25;   
         }if (changeValueA == 75 && banknotesArray[i] == banknotesArrays[2]){
            changeValueA -= changeA*3;
            bank += 25;
                   
         }else if (changeValueA < 75 && banknotesArray[i] == banknotesArrays[2]) { 
            changeValueB -= changeB ;
            changeValueA -= changeA;  
            bank += 25;   
         // }else if (changeValueA < 75){
            // changeValueA -= changeA*2;
            
            // changeValueB -= changeB ;
            // changeValueA -= changeA; 
            // bank += 25;
         }else {
            // changeValueB -= changeB ;
            // changeValueA -= changeA;  
            // bank += 25; 
            // changeValueA -= changeA*2;
            // return true;
         }

         
         console.log ("change =" + changeA, changeB, changeValueA, changeValueB);
         console.log ("bank =" +bank);
         
    }
    if(banknotesArray[0] > ticetsCost || changeValueA < -ticetsCost || banknotesArray > bank || changeValueB < 0 || changeValueA < 0) {
        return false;
    }else {
      return true;
    }
}
console.log(isPossibleToGiveChange([25, 25, 50, 25, 100, 50, 50])); // True


