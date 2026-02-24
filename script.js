// ex1
function creerCompte(initiale) {
    var solde = initiale;
   return {
   retirer : function(montant) {
    if (solde - montant >= 0) {
    solde = solde - montant;
    return " Voici votre argent : $ " +
   montant;
    }
    return "solde insuffisants."
   },
   deposer: function(montant) {
    solde = solde + montant;
    return "Votre solde est : $" + solde;
   },
   verifierSolde: function() {
    return "Votre solde est : $" + solde;
  }
}

}

// ex2
function makeCounter(initiale) {
    var compte = initiale;
    return {
      up: function() {
        compte = compte + 1;
        return compte;
      },
      down: function() {
        compte = compte - 1;
        return compte;
      },
      reset: function() {
        compte = initiale
        return compte;
      }
    }
}

// ex3
function Tv() {
    return {
      channelNumber: 0,
      
      watch: function() {
        return "vous regardez maintenant la chaîne #" + channelNumber;
      },
      changeChannel: function(num) {
        channelNumber = num
        return "changement vers la chaîne #" + channelNumber;
      }
    }
}