

//PokemonConstructor Classical

class Pokemon {
  constructor(name, hitpoints, type, attackDamage, sound, move) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.type = type;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.move = move;
  }
  weakness() {
    if (this.type === 'Grass') {
      return 'Fire'

    }
    if (this.type === 'Water') {
      return 'Grass'

    }
    if (this.type === 'Fire') {
      return 'Water'

    }
  }
  strength() {
    if (this.type === 'Grass') {

      return 'Water';

    }
    if (this.type === 'Water') {

      return 'Fire';

    }
    if (this.type === 'Fire') {

      return 'Grass';

    }
  }
  talk() {
    return this.sound.toUpperCase()
  }
  useYourMoves() {
    console.log(`${this.name} uses ${this.move}  `)
  }
}










module.exports = { Pokemon };