let cardOne;
let cardTwo;
//  function card(event){
//     let itemSelected = event.target
//    itemSelected.classList.add('span')
     
//  }

 function card(event){
  event.target.classList.add('span')
  if( cardOne !== undefined){
    cardTwo = event.target
  }else{
    cardOne = event.target
  }
  if(cardOne.innerHTML === cardTwo.innerHTML){
    return true

    
  }else{
    return false
 }
}
