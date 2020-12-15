export default class Saluation {

    data : Array<string> = ["Bonjour","Hello", "Hola" , "صباح الخير"];

    random() : string{
      let nbIndexes = this.data.length - 1;
      let hasard = Math.random(); // 0 et 1 de manière aléatoire  0.1279849
      // 3 * 0.9 = 2.7 => 3
      // 3 * 0.8 = 2.4 => 2
      let indexe = Math.round(hasard * nbIndexes) ;
      return this.data[indexe];
    }

}