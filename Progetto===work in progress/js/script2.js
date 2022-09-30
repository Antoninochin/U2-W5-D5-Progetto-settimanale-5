const animals = ['🐔', '🕷', '🦂', '🐾', '🦊', '🦍', '🐵', '🐁', '🐫', '🐔', '🕷', '🦂', '🐾', '🦊', '🦍', '🐵', '🐁', '🐫']

let mescola = animals.sort(() => Math.random() - 0.5)



document.getElementById("flex").innerHTML = mescola



