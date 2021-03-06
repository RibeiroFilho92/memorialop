(function() {

    let toBe = ['Kitchen', 'Bedroom', 'Bathroom', 'Dining room', 'Living room', 'Garage', 'Backyard', 'Cozinha', 'Quarto', 'Banheiro', 'Sala de jantar', 
                'Sala de estar', 'Garagem', 'Quintal']
    
    let selected = []
    
    let array = []

    for (let i = 0; i < 14; i++) {
        let card = {
            src: toBe[i],
            id: i % 7
        };
        array.push(card)
    }

    startGame();

    function startGame() {
        selected = []
        array = randomSort(array);
        let frontFace = document.getElementsByClassName('front')
        let backFace = document.getElementsByClassName('back')
        for (let i = 0; i < 14; i++) {
            frontFace[i].classList.remove('flipped', 'match')
            backFace[i].classList.remove('flipped', 'match')

            let card = document.getElementById(`card${i}`);
            card.style.left = (i === 0 || i === 7) ? 5 + "px" : i % 7 * 165 + 5 + "px"
            card.style.top = i < 7 ? 5 + "px": 250 + "px"

            card.addEventListener("click", flipCard, false)

            frontFace[i].innerHTML = array[i].src
            frontFace[i].setAttribute('id', array[i].id)
        }
    }
    function randomSort(array) {
        let novoArray = []
        while(novoArray.length !== array.length) {
            let i = Math.floor(Math.random() * array.length)
            if (novoArray.indexOf(array[i])< 0 ) {
                novoArray.push(array[i])
            }
        }
        return novoArray
    }

    function flipCard() {
        if(selected.length < 2) {
            let faces = this.getElementsByClassName('face')
            if(faces[0].classList.length > 2) {
                return
            }
            faces[0].classList.toggle('flipped')
            faces[1].classList.toggle('flipped')

            selected.push(this)

            if(selected.length === 2) {
                if(selected[0].childNodes[3].id === selected[1].childNodes[3].id) {
                    selected[0].childNodes[1].classList.toggle('match')
                    selected[0].childNodes[3].classList.toggle('match')
        
                    selected[1].childNodes[1].classList.toggle('match')
                    selected[1].childNodes[3].classList.toggle('match')

                    selected = []

                }
            }
        } else {
            selected[0].childNodes[1].classList.toggle('flipped')
            selected[0].childNodes[3].classList.toggle('flipped')

            selected[1].childNodes[1].classList.toggle('flipped')
            selected[1].childNodes[3].classList.toggle('flipped')

            selected = []
        }
    }

}());