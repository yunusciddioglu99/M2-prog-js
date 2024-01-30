class Dino
{
    constructor(naam)
    {
        this.naam = "Spyro";

        this.vleeseter = true

        this.leeftijd = "33"
    }
}



class App
{
    runApplication()
    {
        console.log("helloworld!");

        let dino = new Dino("Spyro",true,20);

        console.log("de leeftijd van deze + "+ dino.naam + " is : "+ dino.leeftijd);
        console.log("en deze " + dino.naam + " eet vlees: "+ dino.vleeseter);
       
    }
}

let app = new App();
app.runApplication();