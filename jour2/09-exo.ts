abstract class Music {
    protected instrument : string;

    abstract makeSound(): string ;
    play() :string {
        return "play music" ;
    }
}
/* let m = new Music() */
class Violon extends Music{
    makeSound(): string{
        return "Do Ré Mi !";
    }
}

let v = new Violon();

console.log(v.makeSound());
console.log(v.play());

// tsc 09-exo.ts && node 09-exo.js

// tout ce que l'on a vu => permet plus facilement comprendre Angular 

// 10-interface.ts 