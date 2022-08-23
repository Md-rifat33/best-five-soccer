document.getElementById('select_btn1').addEventListener('click', function () {
  selectPlayer('card1', 'select_btn1')
})

document.getElementById('select_btn2').addEventListener('click', function () {
  selectPlayer('card2', 'select_btn2')
})

document.getElementById('select_btn3').addEventListener('click', function () {
  selectPlayer('card3', 'select_btn3')
})
document.getElementById('select_btn4').addEventListener('click', function () {
  selectPlayer('card4', 'select_btn4')
})
document.getElementById('select_btn5').addEventListener('click', function () {
  selectPlayer('card5', 'select_btn5')
})
document.getElementById('select_btn6').addEventListener('click', function () {
  selectPlayer('card6', 'select_btn6')
})

document
  .getElementById('calculate_btn')
  .addEventListener('click', calculatePlayerExpense)

document
  .getElementById('calculate_total_btn')
  .addEventListener('click', calculateTotal)

// function for Selecting Player

let selectedPlayer = 0

function selectPlayer(player, playerBtn) {
  if (selectedPlayer <= 4) {
    const orderedList = document.getElementById('selected_players_list')
    const createElement = document.createElement('li')
    createElement.innerText = document.getElementById(player).innerText
    createElement.className = 'list_item'
    orderedList.appendChild(createElement)
    document.getElementById(playerBtn).setAttribute('disabled', true)
    selectedPlayer++
  } else {
    alert("You Can't select more than 5 player")
  }
}

// Calculate Section

function calculatePlayerExpense() {
  const perPlayerInput = document.getElementById('per_player_input')
  const perPlayerCost = +perPlayerInput.value
  if (typeof perPlayerCost !== 'number' || !perPlayerCost) {
    alert('perPlayerCost must be a number')
  }
  const li = document.querySelectorAll('.list_item')
  const totalCost = perPlayerCost * li.length
  const playerExpense = document.getElementById('player_expense')
  playerExpense.innerText = totalCost
}

function calculateTotal() {
  const managerInput = document.getElementById('manager_cost')
  const mangerCost = +managerInput.value
  if (typeof mangerCost !== 'number' || !mangerCost) {
    alert('Please enter number')
  }
  managerInput.value = ''
  const coachInput = document.getElementById('coach_cost')
  const coachCost = +coachInput.value
  if (typeof coachCost !== 'number' || !coachCost) {
    alert('Please enter number')
  }
  coachInput.value = ''
  const perPlayerInput = document.getElementById('per_player_input')
  const perPlayerCost = +perPlayerInput.value
  perPlayerInput.value = ''
  const li = document.querySelectorAll('.list_item')
  const totalCost = perPlayerCost * li.length
  const total = document.getElementById('total_cost')
  total.innerText = mangerCost + coachCost + totalCost
}
