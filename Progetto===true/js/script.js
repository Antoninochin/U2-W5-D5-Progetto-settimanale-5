let cardOne;
let cardTwo;
//  function card(event){
//     let itemSelected = event.target
//    itemSelected.classList.add('span')
     
//  }

 function card(event){
  cardOne.classList.add('span')
  
  if( cardOne !== undefined){
    cardTwo = event.target
  }else{
    cardOne = event.target
  }
  if(cardOne.innerHTML === cardTwo.innerHTML){
    
  }
 }
