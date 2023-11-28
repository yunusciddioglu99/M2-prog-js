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


    }
}

let app = new App();
app.runApplication();