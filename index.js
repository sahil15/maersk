//Shuffles the array and return random numbers
const shuffleArray =  (array) => {
    let randomArray = array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    return randomArray;
}

//Shuffle or sort the array based on the action provided.
const shuffleAndSort = (action) => {
    let numberedArray = [1,2,3,4,5,6,7,8,9];
    let shuffledArray = shuffleArray(numberedArray);
    let arrayToLoop = (action == 'shuffle') ? shuffledArray : numberedArray;
    let flexGridContent = '';
    for(var i = 0; i < arrayToLoop.length; i++){
        if(i == 0){
            flexGridContent += `<div class="flex-grid">`;
            flexGridContent += `<div class="col col-${arrayToLoop[i]}">${arrayToLoop[i]}</div>`;
        }else if(i == arrayToLoop.length -1){
            flexGridContent += `<div class="col col-${arrayToLoop[i]}">${arrayToLoop[i]}</div>`;
            flexGridContent += `</div>`;
        }else if( (i % 3 == 0) ){
            flexGridContent += `</div><div class="flex-grid">`;
            flexGridContent += `<div class="col col-${arrayToLoop[i]}">${arrayToLoop[i]}</div>`;
        }else{
            flexGridContent += `<div class="col col-${arrayToLoop[i]}">${arrayToLoop[i]}</div>`;
        }
    }
    document.getElementsByClassName("flex-grid-container")[0].innerHTML = flexGridContent;
}