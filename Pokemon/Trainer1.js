//trainerConstructor Classical


class Trainer {

  constructor(name) {
    this.name = name;
    this.capturedPokemon = {}
  }
  catch(nickname, pokemon) {

    this.capturedPokemon[nickname] = pokemon;

  }
}






module.exports = { Trainer };