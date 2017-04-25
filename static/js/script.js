



function randomFunction(){
  var quotes = ["C'est quand le silence s'est tu que les oiseaux se sont mis à chanter.", "On aurait voulu choisir la facilité mais c'était trop compliqué.", "J'habite une maison en moi...", "La lune n'éclaire que les yeux ouverts", "C'est parce que le feu est sacré qu'on ne laissera pas les rivières l'emporter.", "Sans la magie des femmes nous serions noirs comme nos nuits.", "Cent paroles ne valent pas une flamme.", "Nouvelle aube....même si elle n'existe pas on fera comme si elle était là.", "Pour la victoire de la lumière nous brandirons une torche sur les plus longs chemins.", "S'il fait souvent noir dans nos histoires c'est que l'envie appartient `a la nuit."]
  var num = Math.floor((Math.random() * (quotes.length-1)) + 1);
  document.getElementById("showQuote").innerText = quotes[num];
}
function tweetFunction(){
  var textShow = document.getElementById("showQuote").innerText;
  window.open("https://twitter.com/intent/tweet?text="+ textShow);

}


 


  