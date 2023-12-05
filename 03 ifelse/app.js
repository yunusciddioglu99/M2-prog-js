class App
{
    runApplication()
    {


      let newstitle = document.getElementById("newstitle");
      console.log(newstitle);

      let gamenewsheadline = document.getElementsByClassName("gamenews headline");
      console.log(gamenewsheadline);

      let gamenews = document.getElementsByClassName("gamenews");
      console.log(gamenews);

      //let randamGetal = math.random();

      let random = Math.random();
      console.log(random);
      if(random < 0.2)
      {
        newstitle.style.backgroundColor = "#FF0000"
      } 
      else if (random >= 0.2&& random < 0.6)
      {
        newstitle.style.backgroundColor = "#9f37cc"
      } 
      else if (random >= 0.6&& random < 0.75)
      {
        newstitle.style.backgroundColor = "#0a2d69"
      } 
      else if (random > 0.75)
      {
        newstitle.style.backgroundColor = "#c9bd38"
      }



      let newsitem1 = document.getElementsByClassName("gamenews headline")[0];

      let random1 = Math.random();
      console.log(random1)
      if (random1 < 0.5)
      {
        newsitem1.style.backgroundColor = "#9e1811"
      } 
      else
      {
        newsitem1.style.backgroundColor = "#0d3606"
      }


      
      let newsitem2 = document.getElementsByClassName("gamenews")[1];

      let random2 = Math.random();
      console.log(random2)
      if (random2 < 0.5)
      {
        newsitem2.style.backgroundColor = "#4dbcc4"
      } 
      else
      {
        newsitem2.style.backgroundColor = "#851948"
      }
    



    }






}

let app = new App();
app.runApplication();