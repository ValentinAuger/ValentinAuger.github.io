
  // Liste de phrases à afficher
  var phrases = [
  "“Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.” Le Lorax de Dr. Seuss",
  "“In the long run, a hierarchical society was only possible on a basis of poverty and ignorance” 1984 de G.Orwell",
  "“We know that no one ever seizes power with the intention of relinquishing it. Power is not a means, it's an end” 1984 de G.Orwell" ,
  "“The masses never revolt of their own accord, and they never revolt merely because they are oppressed. Indeed, so long as they are not permitted to have standards of comparison, they never even become aware that they are oppressed.” 1984 de G.Orwell",
  "“Bus stops are far more interesting and useful places to have art than in museums. Graffiti has more chance of meaning something or changing stuff than anything indoors.” Banksy",
  "“When you go to an art gallery you are simply a tourist looking at the trophy cabinet of a few millionaires.” Banksy",
  "“I just wanna make the world a better-looking place. If you don't like it, you can paint over it!” Banksy",
  "“You don't need planning permission to build castles in the sky” Banksy",
  "“There is nothing more dangerous than someone who wants to make the world a better place” Banksy",
  "“I speak for the trees. I speak for the trees, for the trees have no tongues.” Le Lorax de Dr. Seuss",
  "“Un nouveau paradis comme la CIA pour un savant fou trahi” Yonidas",
  "“Maybe wars aren't meant to be won, maybe they're meant to be continuous.” Mr.Robot de Sam Esmail",
  "“Power belongs to the people that take it. Nothing to do with their hard work, strong ambitions, or rightful qualifications, no. The actual will to take is often the only thing that’s necessary.” Mr.Robot de Sam Esmail",
  "”ファシストになるより豚の方がマシさ” Porco Rosso de Hayao Miyazaki",
  "“Un peu plus proche des gens aux bras scarifiés que des gens populaires du bahut” Jyeuhair",
  ];

  // Fonction pour obtenir un index aléatoire
  function getRandomIndex(max) {
      return Math.floor(Math.random() * max);
  }

  // Fonction pour afficher une phrase aléatoire dans la balise <h3>
  function displayRandomPhrase() {
      var randomIndex = getRandomIndex(phrases.length);
      var randomPhrase = phrases[randomIndex];
      document.getElementById("citation").textContent = randomPhrase;
  }

  // Afficher une phrase aléatoire au chargement initial de la page
  displayRandomPhrase();

  // Ajouter un écouteur d'événement pour rafraîchir la phrase lors du rechargement de la page
  window.addEventListener('load', displayRandomPhrase);
