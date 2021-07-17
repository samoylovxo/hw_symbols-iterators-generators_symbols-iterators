/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import Person from './Person';

class Team {
  constructor(team) {
    this.team = team;
  }

  [Symbol.iterator]() {
    const { team } = this;

    let char;

    return {
      next() {
        char = char === undefined ? 0 : char + 1;
        const person = new Person();

        return {
          done: char >= team.length,
          value: person.getChar(team[char]),
        };
      },
    };
  }
}

const team = new Team(['Bowman', 'Magician', 'Undead']);
console.log([...team]);
