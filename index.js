const cards = ["Lisa", "Kaitlin", "Jan",];

function writeCards() {

    const newCards = [];

    for (let i = 0; i < cards.length; i++) {
        newCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);

    }

    return newCards;


}

writeCards(cards);

function countDown() {

    let countDown = 10;

    while (countDown > -1) {
        console.log(countDown--);
    }


}

countDown()
