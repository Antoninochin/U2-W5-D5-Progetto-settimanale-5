let cardOne;
let cardTwo;
//  function card(event){
//     let itemSelected = event.target
//    itemSelected.classList.add('span')
     
//  }

 function card(event){
  
  
  if( cardOne !== undefined){
    cardTwo = event.target
  }else{
    cardOne = event.target
  }
  if(cardOne.innerHTML === cardTwo.innerHTML){
    cardOne.classList.add('span')
    cardTwo.classList.add('span')
  }else{
    cardOne && cardTwoclassList.add('hide')
  }
 }700;
