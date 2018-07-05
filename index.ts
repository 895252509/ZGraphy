
import { ZGraphy } from './src/ZGraphy';

const zg = new ZGraphy();

zg.log();

console.log("123");

let obj = {
  name:"zx",
  age: 18,
  run: function () {
    return () => {
      console.log(this.name);
    }
  }
}

let a = obj.run()();

interface Card{
  suit: string;
  card: number;
}

interface Deck{
  suits: string[];
  cards: number[];
  createCard(this: Deck): ()=> Card;
}

