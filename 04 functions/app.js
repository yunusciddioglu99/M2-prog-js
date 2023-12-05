function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout")
    console.log(shoutout);
}
argumentsAreHandy("Super Shout out");
argumentsAreHandy("Mega Shout out");
argumentsAreHandy("Ultra Shout out");


function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen")

}
superMooieGlobalFunction();
superMooieGlobalFunction();


class App
{
    runApplication()
    {
        console.log("hello world!");
        superMooieGlobalFunction();
    }
}

let app = new App();
app.runApplication();