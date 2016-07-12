function onload()
{
  document.getElementById("header").innerHTML =
    "<h1> Budgie Blog </h1>" +
    "<p class='subtitle'>" +
      "Life with Apollo the Budgerigar" +
    "</p>"
    ;

  document.getElementById("contentList").innerHTML =
    "<h2 id='listTitle'> Table of Contents!!! </h2>" +
    "<a href='index.html'><div class='topic'>" +
      "<h3 class=topic'> Home </h3>" +
    "</div></a>" +
    "<div class='topic'>" +
      "<h3 class='topic'> Why I got a budgie </h3>" +
    "</div>" +
    "<ul>" +
      "<li><a href='1.1_AlexTheParrot.html'> Alex the Parrot </a></li>" +
    "</ul>" +
    "<div class='topic'>" +
      "<h3 class='topic'> Choosing Apollo </h3>" +
    "</div>" +
    "<div class='topic'>" +
      "<h3 class='topic'> Cage, toys, and perches </h3>" +
    "</div>" +
    "<div class='topic'>" +
      "<h3 class='topic'> Food and poop </h3>" +
    "</div>" +
    "<div class='topic'>" +
      "<h3 class='topic'> Taming and training </h3>"
    "</div>"
    ;
}
