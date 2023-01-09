const animals = ['🐔', '🕷', '🦂', '🐾', '🦊', '🦍', '🐵', '🐁', '🐫', '🐔', '🕷', '🦂', '🐾', '🦊', '🦍', '🐵', '🐁', '🐫']

let mescola = animals.sort(() => Math.random() - 0.5)


 //document.getElementsById('flex').innerHTML = mescola

for(let i = 0; i < mescola.length; i++){
    console.log(mescola[i])
    mescola[i].classList.add('span')
    document.getElementById('flex').innerHTML = mescola[i]
}



