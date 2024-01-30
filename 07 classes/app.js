class App
{
    runApplication()
    {
      
    }
}



class Greet
{
    constructor()
    {
        this.greeting = "Greetings!";
    }

    showGreeting()
    {
        console.log("greeting van binnen: " +this.greeting);
    }
}



class Goodbye
{
    constructor()
    {
        this.farewell = "Bye Bye";
    }

    showBye()
    {
        console.log("Bye Bye van binnen: "+this.farewell);
    }
}




let greet = new Greet();
greet.showGreeting();
greet.showGreeting();
greet.showGreeting();

let bye = new Goodbye();
bye.showBye();
bye.showBye();
bye.showBye();














let app = new App();
app.runApplication();