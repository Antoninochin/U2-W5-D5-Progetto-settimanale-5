let cardOne;
let cardTwo;
//  function card(event){
//     let itemSelected = event.target
//    itemSelected.classList.add('span')
     
//  }

 function card(event){
     let cardOne = event.target
     let cardTwo = event.target
     cardOne.classList.add('span')
     cardTwo.classList.add('span')
     if(cardOne !== undefined){
      return true
    }else 
    console.log('card')
}

