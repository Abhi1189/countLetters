function countLetters(str){
    
    //split, join and convert the string to lower case
    str = str.split(' ').join('').toLowerCase();

    //intitialize an empty onject
    let object = {};

    //loop over the string
    for(let i = 0; i < str.length; i++){
        
        //Sam's mentions.. breaking up things a bit to understand them better
        //with respect to line 25..
        // var currentLetter = str[i];
        // object[currentLetter] = 0;

        //intitialize count to 0
        let count = 0;
        //second index to loop and compare the elements in the string
        for(let j = 0; j < str.length; j++){
            if(str[j] === str[i]){
                count++;
            }
        }
        object[str[i]] = count;
    }
    return object;
}
console.log(countLetters("Lighthouse in the house"));