function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());


let x = 9;
let a = 3;
let b = 4;
let c = 89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);


function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y;
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);



let u = 9;
let h = 8;
let l = 15;
let logY = Math.log(l) + h + Math.pow(u,2);
console.log(logY);

function BerekeningTest(u,h,l)
{
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY;
}


let logY1 = BerekeningTest(14,32,66)
console.log(logY1);

let logY2 = BerekeningTest(55,99,73)
console.log(logY2);


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



let g = 5
let p = 9



class App
{
    runApplication()
    {
        console.log("hello world!");
    }

    newClassFunction()
    {
        console.log("hello world in de nieuwClassFunction");
    }

    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);

    }

    Mario()
    {
        console.log("MARIO!!")
    }

    Bowser()
    {
        let lach = "BWAHAHA!!!"
        return lach;
    }


    

    Nummers(g,p)
    {
        let f = g+p
        return f
    }







}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");

app.Mario();
app.Bowser();
app.Nummers();