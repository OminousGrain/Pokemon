

class Battle {

  constructor(trainer1, trainer2, nickname1, nickname2) {
    //makesure to switch each time a method is called
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.PokemonChosen1 = nickname1;
    this.PokemonChosen2 = nickname2;
    this.turn = true;

  }
  fight() {



    if (this.turn === false) {




      console.log(`${this.PokemonChosen2.name}s Turn`)
      console.log(`${this.PokemonChosen2.name} uses ${this.PokemonChosen2.move} against ${this.PokemonChosen1.name} `)
      this.PokemonChosen2.useYourMoves()


      console.log(`${this.PokemonChosen2.type} Type vs  ${this.PokemonChosen1.type} Type`)

      if (this.PokemonChosen2.strength() !== this.PokemonChosen1.weakness()) {
        console.log("its super effective!!!!");
        this.PokemonChosen2.attackDamage = this.PokemonChosen2.attackDamage * 1.25;
        console.log('hitpoints is ' + this.PokemonChosen1.hitpoints)
        console.log('attack damage is ' + this.PokemonChosen2.attackDamage);
        this.PokemonChosen1.hitpoints = this.PokemonChosen1.hitpoints - this.PokemonChosen2.attackDamage;
        console.log('resultant hp is ' + this.PokemonChosen1.hitpoints)
        if (this.PokemonChosen1.hitpoints <= 0) {

          this.PokemonChosen1.status = 'unconscious'
          console.log(`${this.PokemonChosen1.name} is unconscious`)
        }

      }



      if (this.PokemonChosen2.weakness() !== this.PokemonChosen1.strength()) {
        console.log("its not very effective!!!!");
        this.PokemonChosen2.attackDamage = this.PokemonChosen2.attackDamage * 0.75;
        console.log('hitpoints is ' + this.PokemonChosen1.hitpoints)
        this.PokemonChosen1.hitpoints = this.PokemonChosen1.hitpoints += - this.PokemonChosen2.attackDamage;
        console.log('attack damage is ' + this.PokemonChosen2.attackDamage);
        console.log('resultant hp is ' + this.PokemonChosen1.hitpoints)
        if (this.PokemonChosen1.hitpoints <= 0) {

          this.PokemonChosen1.status = 'unconscious'
          console.log(`${this.PokemonChosen1.name} is unconscious`)
        }

      }




      this.turn = true;
      return

    }

    if (this.turn === true) {

      console.log(`${this.PokemonChosen1.name}s Turn`);
      console.log(`${this.PokemonChosen1.name} uses ${this.PokemonChosen1.move} against ${this.PokemonChosen2.name} `);
      this.PokemonChosen1.useYourMoves()
      console.log(`${this.PokemonChosen1.type} type vs ${this.PokemonChosen2.type} Type`)


      if (this.PokemonChosen1.strength() !== this.PokemonChosen2.weakness()) {
        console.log("its super effective!!!!");
        this.PokemonChosen1.attackDamage = this.PokemonChosen1.attackDamage * 1.25;
        console.log('hitpoints is ' + this.PokemonChosen2.hitpoints)
        console.log('attack damage is ' + this.PokemonChosen1.attackDamage);
        this.PokemonChosen2.hitpoints = this.PokemonChosen2.hitpoints - this.PokemonChosen1.attackDamage;
        console.log('resultant hp is ' + this.PokemonChosen2.hitpoints);
        if (this.PokemonChosen2.hitpoints <= 0) {

          this.PokemonChosen2.status = 'unconscious'
          console.log(`${this.PokemonChosen2.name} is unconscious`)
        }
      }



      if (this.PokemonChosen1.weakness() !== this.PokemonChosen2.strength()) {
        console.log("its not very effective!!!!");
        this.PokemonChosen1.attackDamage = this.PokemonChosen1.attackDamage * 0.75;
        console.log('hitpoints is ' + this.PokemonChosen2.hitpoints)
        console.log('attack damage is ' + this.PokemonChosen1.attackDamage);
        this.PokemonChosen2.hitpoints = this.PokemonChosen2.hitpoints - this.PokemonChosen1.attackDamage
        console.log('resultant hp is ' + this.PokemonChosen2.hitpoints);



        if (this.PokemonChosen2.hitpoints <= 0) {

          this.PokemonChosen2.status = 'unconscious'
          console.log(`${this.PokemonChosen2.name} is unconscious`)
        }
      }





      this.turn = false;
      return

    }

  }

}



module.exports = { Battle };


