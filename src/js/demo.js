import {INFO} from './constants';

let counter = 1
let objectValues = Object.values(INFO)



const counterTrack = () => {
    if(counter <1) counter = 5
    if(counter >5) counter = 1
}


const print = () => {
    counterTrack()
    card.children[0].textContent = objectValues[counter - 1].title
    card.children[1].textContent = objectValues[counter - 1].description
}

const add = () => {
    counter ++
}

const rest = () => {
    counter ++
}

print()

export{print, add, rest}
