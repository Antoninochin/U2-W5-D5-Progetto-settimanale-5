const animals = ['🐔', '🕷', '🦂', '🐾', '🦊', '🦍', '🐵', '🐁', '🐫', '🐔', '🕷', '🦂', '🐾', '🦊', '🦍', '🐵', '🐁', '🐫']

let mescola = animals.sort(() => Math.random() - 0.5)

mescola = []

for(let i = 0; i < mescola.length; i++){
    mescola[i].classList.add('span')
    document.getElementById('flex').innerHTML = mescola[i]
    
}



