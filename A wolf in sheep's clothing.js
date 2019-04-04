function warnTheSheep(queue) {
const index = queue.indexOf('wolf')
    if(index !== queue.length-1) {
        return `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`;
    }
    else {
        return  "Pls go away and stop eating my sheep"
    }
}    
