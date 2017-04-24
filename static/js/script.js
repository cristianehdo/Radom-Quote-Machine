<script>



 buttonNewQuote.function randomFunction(){

var number = Math.floor((Math.random() * 10) + 1);

randomQuotes(number);

 document.getElementById("showQuote").value = answer;

  });

function randomQuotes(num) {
  var answer = "";


  switch (num) {
      case 1: answer = "C'est quand le silence s'est tu que les oiseaux se sont mis à chanter.";
      break;
      case 2: answer = "On aurait voulu choisir la facilité mais c'était trop compliqué.";
      break;
      case 3: answer = "J'habite une maison en moi...";
      break;
      case 4: answer = "La lune n'éclaire que les yeux ouverts";
      break;
      case 5: answer = "C'est parce que le feu est sacré qu'on ne laissera pas les rivières l'emporter.";
      break;
      case 6: answer = "Sans la magie des femmes nous serions noirs comme nos nuits.";
      break;
      case 7: answer = "Cent paroles ne valent pas une flamme.";
      break;
      case 8: answer = "Nouvelle aube....même si elle n'existe pas on fera comme si elle était là.";
      break;
      case 9: answer = "Pour la victoire de la lumière nous brandirons une torche sur les plus longs chemins.";
      break;
      case 10: answer = "case 10";

      return answer;
  }
  


  </script>