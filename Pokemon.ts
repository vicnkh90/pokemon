import { question } from 'readline-sync'
// having 2 pokemon, with specific oppHP

const myPokemon = 'Bulbasaur'
const opponent = 'Squirtle'
let myHP = 100
let oppHP = 100
let isMyTurn = true
let currentPokemon = myPokemon
//const Skill1 = "Leaf Blade"
//const Skill2 = "Tackle"
//const Skill3 = "Shadow Ball"
//const Skill4 = 'Water Gun'

function displayMove(array) {
  let i = 0
  while (i < 3) {
    console.log(i + '. ' + array[i].name + ', Damage:' + array[i].damage)

    // i += 1
    i = i + 1
  }
}

const moves2 = [
  {
    name: 'Shadow Ball',
    damage: 50,
    type: 'Ghost',
  },
  {
    name: 'Body Slam',
    damage: 75,
    type: 'Normal',
  },
  {
    name: 'Solar Beam',
    damage: 100,
    type: 'Grass',
  },
  {
    name: 'Hyper Beam',
    damage: 150,
    type: 'Normal',
  },
]


console.log('You have encountered a wild ' + opponent)
console.log('You send out ' + myPokemon)
console.log(myPokemon + ' has ' + myHP + ' HP')
console.log(opponent + ' has ' + oppHP + ' HP')

// the game continues while either pokemon has more than 0 HP
// as long as my HP is more than 0 and opponent HP is more than 50
// if myHP goes below 0, stop
// if oppHP goes below 0, stop

// myHP >0 || oppHP > 0
// my HP goes below 0, but opponent HP is above 0, continue
// opponent HP goes below 0, but my HP is above 0, continue
// my HP is below 0 and opponent HP is below 0, stop



while (myHP > 0 || oppHP > 0) {
  console.log('------------------------------')
  let attackerName = isMyTurn ? myPokemon : opponent
  let defenderName = isMyTurn ? opponent : myPokemon

  // first pokemon attacks
  displayMove(moves2);
  let ansMove = question('Select your move\n')


  const move = [
    moves2[ansMove].name,
  ]
  console.log(attackerName + ' uses ' + moves2[ansMove].name)
  console.log(moves2[ansMove].name + 'hits for ' + moves2[ansMove].damage)

  if (isMyTurn) {
    oppHP = oppHP - 50
    console.log(defenderName + "'s health is reduced to " + oppHP)
  } else {
    myHP = myHP - 50
    console.log(defenderName + "'s health is reduced to " + myHP)
  }

  // TODO: switch turns
  isMyTurn = !isMyTurn
}

if (oppHP <= 0) {
  console.log(opponent + ' faints')
  console.log(myPokemon + ' has gained 50 exp')
} else if (myHP <= 0) {
  console.log(myPokemon + ' faints')
  console.log(opponent + ' has gained 50 exp')
  console.log('GAME OVER')
}
