const displayArray = [];
function display(players) {

    const div = document.getElementById('div');
    // console.log(players);
    div.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        // console.log(displayArray[i]);
        if (players.length <= 5) {
            const name = displayArray[i].playerName;
            const li = document.createElement('li');
            li.innerHTML = `
            ${i + 1}${name}
    
            `;

            div.appendChild(li);
            document.getElementsByClassName('dis').setAttribute('disabled', true);
        }

        else {
            alert('Do not choose more than 5 players');
        }
    }
}

// addToCart
function totalPlayer(element) {

    const playerName = element.parentNode.children[0].innerText;
    console.log(playerName);
    const playerObj = {
        playerName: playerName
    }

    displayArray.push(playerObj);
    // console.log(displayArray);
    // document.getElementById('calculate-btn').innerText = displayArray.length;
    // console.log(a);
    const totalPlayer = displayArray.length;
    console.log(totalPlayer);
    display(displayArray);
    return totalPlayer;

}

const perPlayerInput = document.getElementById('per-player-input').value;
console.log(perPlayerInput);
const managerInput = document.getElementById('manager-input').value;
console.log(managerInput);
const coachInput = document.getElementById('coach-input').value;

document.getElementById('calculate-btn').addEventListener('click', function () {

    let perPlayerExpense = (displayArray.length) * parseInt(perPlayerInput);

    let playersExpense = document.getElementById('players-expense');
    playersExpense.innerText = perPlayerExpense;
    return perPlayerExpense;
})

document.getElementById('calculate-total').addEventListener('click', function () {

    let perPlayerExpense = (displayArray.length) * parseInt(perPlayerInput);
    const totalBudget = parseInt(perPlayerExpense) + parseInt(managerInput) + parseInt(coachInput);
    let total = document.getElementById('total');

    total.innerText = parseInt(totalBudget);
})