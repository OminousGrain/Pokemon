const { expect } = require('chai');

const { Pokemon } = require('../Pokemon/Pokemon1.js');
const { Trainer } = require('../Pokemon/Trainer1.js');
const { Battle } = require('../Pokemon/Battle1.js');





describe('constructor creates a pokemon', () => {
    it('returns a pokemon charmander', () => {

        let Charmander =
        {
            name: 'Charmander',
            hitpoints: 100,
            type: 'Fire',
            attackDamage: 100,
            sound: 'Chaar',
            move: 'Flame Spout'
        };
        let actual = new Pokemon('Charmander', 100, 'Fire', 100, 'Chaar', 'Flame Spout')

        expect(actual).to.eql(Charmander);
    });
    it(' pokemon has name, hit points (health), attack damage, the sound that it makes, and one move', () => {
        let actual = new Pokemon('Charmander', 100, 'Fire', 100, 'Chaar', 'Flame Spout')

        expect(actual.name).to.equal('Charmander');
        expect(actual.hitpoints).to.equal(100);
        expect(actual.type).to.equal('Fire');
        expect(actual.attackDamage).to.equal(100);
        expect(actual.sound).to.equal('Chaar');
        expect(actual.move).to.equal('Flame Spout');
    });
    it(' Check the class instance methods work', () => {
        let Charmander = new Pokemon('Charmander', 100, 'Fire', 100, 'Chaar', 'Flame Spout')

        expect(Charmander.strength()).to.equal('Grass');
        expect(Charmander.weakness()).to.equal('Water');
        expect(Charmander.talk()).to.equal('CHAAR');
        expect(Charmander.useYourMoves()).to.equal('Flame Spout');
    });


});


describe('constructor creates a Trainer', () => {
    it('returns a Trainer Ash', () => {
        let ash_Ketchum = new Trainer('Ash Ketchum')
        expect(ash_Ketchum).is.instanceOf(Trainer);
    });

    it(' trainer catch() method works', () => {
        let ash_Ketchum = new Trainer('Ash Ketchum')
        expect(ash_Ketchum).is.instanceOf(Trainer);
        let Charmander = new Pokemon('Charmander', 100, 'Fire', 100, 'Chaar', 'Flame Spout')
        ash_Ketchum.catch('Flamey', Charmander) //should add existing charmander to capturedPokemon object

        expect(ash_Ketchum.capturedPokemon.Flamey).to.be.eql({
            name: 'Charmander',
            hitpoints: 100,
            type: 'Fire',
            attackDamage: 100,
            sound: 'Chaar',
            move: 'Flame Spout'
        })
    });
});


describe.only('battle constructor ', () => {
    let ash_Ketchum = new Trainer('Ash Ketchum');

    let ben_Kaufman = new Trainer('Ben Kaufman');

    let Charmander = new Pokemon('Charmander', 100, 'Fire', 20, 'Chaar', 'Flame Spout');
    let Squirtle = new Pokemon('Squirtle', 100, 'Water', 20, 'Squiiirtle', 'Water Spout');
    ash_Ketchum.catch('Flamey', Charmander);
    ben_Kaufman.catch('Splash', Squirtle);


    it(' creates an object with trainer1, trainer2, nickname1, nickname2 and turn ', () => {

        let battle1 = new Battle(ash_Ketchum, ben_Kaufman, ash_Ketchum.capturedPokemon.Flamey, ben_Kaufman.capturedPokemon.Splash);
        expect(battle1).is.instanceOf(Battle);
    });
    it('after one turn, the turn changes ', () => {
        let battle1 = new Battle(ash_Ketchum, ben_Kaufman, ash_Ketchum.capturedPokemon.Flamey, ben_Kaufman.capturedPokemon.Splash);
        battle1.fight();
        console.log(ash_Ketchum.capturedPokemon.Flamey.hitpoints)
        expect(battle1.turn).to.be.equal(false);
        battle1.fight();
        console.log(ash_Ketchum.capturedPokemon.Flamey.hitpoints)
        expect(battle1.turn).to.be.equal(true);
        battle1.fight();
        console.log(ash_Ketchum.capturedPokemon.Flamey.hitpoints)

        battle1.fight();
        console.log(ash_Ketchum.capturedPokemon.Flamey.hitpoints)
        battle1.fight();

        console.log(ash_Ketchum.capturedPokemon.Flamey.hitpoints)

        battle1.fight();
        battle1.fight();
        battle1.fight();



        console.log(ash_Ketchum.capturedPokemon.Flamey.status)


        expect(ash_Ketchum.capturedPokemon.Flamey.status).to.be.equal('unconscious');

    });



});

