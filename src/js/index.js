import '../scss/styles.scss';
import { print, add, rest} from './demo';


const card = document.getElementById('card')
const previuosCard = document.getElementById('previuos-card')
const nextCard = document.getElementById('next-card')


previuosCard.addEventListener('click', () => {
    rest()
    print()
    
})

nextCard.addEventListener('click', () => {
    add()
    print()
})