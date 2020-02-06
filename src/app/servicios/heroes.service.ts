import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes:Heroe[] = [
        {
          nombre: "Aquaman",
          bio: "El poder m�s reconocido de Aquaman es la capacidad telep�tica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en �destreza f�sica, habilidades deductivas y obsesi�n�. La mayor parte de las caracter�sticas b�sicas de los c�mics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiaci�n a niveles superhumanos, en el accidente que tuvo cuando era ni�o. A pesar de su ceguera, puede \"ver\" a trav�s de un \"sexto sentido\" que le sirve como un radar similar al de los murci�lagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles pr�cticamente ilimitados a la vez que aumenta su furia. Dependiendo de qu� personalidad de Hulk est� al mando en ese momento (el Hulk Banner es el m�s d�bil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz s�lida mediante la utilizaci�n del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder m�stico llamado Starheart), una llama m�gica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cay� a la Tierra, el cual encontr� un fabricante de l�mparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una ara�a radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o m�s. Gracias a esta gran fuerza Spider-Man puede realizar saltos �ncreibles. Un \"sentido ar�cnido\", que le permite saber si un peligro se cierne sobre �l, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que �sta sea, adem�s ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee tambi�n una fuerza sobrehumana, que si bien no se compara con la de otros superh�roes como Hulk, s� sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];

    constructor() {
        console.log("Servicio listo para usarse");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }

    getHeroe(index:string):Heroe{
      return this.heroes[index];
    }

    findHeroes(termino:string):Heroe[]{
      
      let heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();

      for(let i =0; i< this.heroes.length; i++){
        let heroe = this.heroes[i];
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino) >= 0 ){
          heroe.index = i;
          heroesArr.push(heroe);
        }
      }
      return heroesArr;
    }

}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
    index?:number;
}