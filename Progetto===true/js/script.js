let cardOne;
let copy;
//  function card(event){
//     let itemSelected = event.target
//    itemSelected.classList.add('span')
     
//  }

 function card(event){
     let cardOne = event.target
     cardOne.classList.add('span')
 }
 function cardTwo(event){
  let copy = event.target
  copy.classList.add('span')
}

if(card && cardTwo === true){
  let noShow = card; cardTwo
  noShow.classList.add('span2')
}else {
  noShow.classList.add('hide')
}
