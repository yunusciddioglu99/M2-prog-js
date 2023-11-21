class App
{
    runApplication()
    {
     let boolean = false
     let string = "Ik wil naar huis"
     let number = "0101"

     console.log("lokaal boolean: " + boolean)
     console.log("lokaal string: " + string)
     console.log("lokaal number: " + number)

     this.boolean2 = true
     this.string2 = "Ik wil slapen in me bed"
     this.number2 = "1234"




        this.appNaam = "Angry Birds"
     
        this.versienummer = "1.2"
    
        this.versiedatum = "16/11/2023 14:56:21"
  
        this.autheur = "Yunus"
       
        this.copyright = "Rovio"
        
        this.distributeur = "Sega"
       
        this.darkmode = true
        
    }
}

let app = new App();
app.runApplication();

console.log("class boolean: " + app.boolean2)
console.log("class string: " + app.string2)
console.log("class number: " + app.number2)




console.log("appNaam: " + app.appNaam);
console.log("verisenummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);
