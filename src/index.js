module.exports = (function () {

  function NumberToLetter(nombre, U=null, D=null) {
    	
    var letter = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fiveteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };
    
      var i, j, n, quotient, reste, nb;
      var ch
      var numberToLetter = '';
      //__________________________________

      if (nombre.toString().replace(/ /gi, "").length > 15) return "dépassement de capacité";
      if (isNaN(nombre.toString().replace(/ /gi, ""))) return "Nombre non valide";

      nb = parseFloat(nombre.toString().replace(/ /gi, ""));
      //if (Math.ceil(nb) != nb) return "Nombre avec virgule non géré.";
  if(Math.ceil(nb) != nb){
    nb = nombre.toString().split('.');
    //return NumberToLetter(nb[0]) + " virgule " + NumberToLetter(nb[1]);
    return NumberToLetter(nb[0]) + (U ? " " + U + " et " : " virgule ") + NumberToLetter(nb[1]) + (D ? " " + D : "");
      }
      
      n = nb.toString().length;
      switch (n) {
          case 1:
              numberToLetter = letter[nb];
              break;
          case 2:
              if (nb > 19) {
                  quotient = Math.floor(nb / 10);
                  reste = nb % 10;
                  if (nb < 71 || (nb > 79 && nb < 91)) {
                      if (reste == 0) numberToLetter = letter[quotient * 10];
                      if (reste == 1) numberToLetter = letter[quotient * 10] + "-et-" + letter[reste];
                      if (reste > 1) numberToLetter = letter[quotient * 10] + "-" + letter[reste];
                  } else numberToLetter = letter[(quotient - 1) * 10] + "-" + letter[10 + reste];
              } else numberToLetter = letter[nb];
              break;
          case 3:
              quotient = Math.floor(nb / 100);
              reste = nb % 100;
              if (quotient == 1 && reste == 0) numberToLetter = "hundred";
              if (quotient == 1 && reste != 0) numberToLetter = "hundred" + " " + NumberToLetter(reste);
              if (quotient > 1 && reste == 0) numberToLetter = letter[quotient] + " hundreds";
              if (quotient > 1 && reste != 0) numberToLetter = letter[quotient] + " hundred " + NumberToLetter(reste);
              break;
          case 4 :
          case 5 :
          case 6 :
              quotient = Math.floor(nb / 1000);
              reste = nb - quotient * 1000;
              if (quotient == 1 && reste == 0) numberToLetter = "thousand";
              if (quotient == 1 && reste != 0) numberToLetter = "thousand" + " " + NumberToLetter(reste);
              if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " mille";
              if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " mille " + NumberToLetter(reste);
              break;
          case 7:
          case 8:
          case 9:
              quotient = Math.floor(nb / 1000000);
              reste = nb % 1000000;
              if (quotient == 1 && reste == 0) numberToLetter = "million";
              if (quotient == 1 && reste != 0) numberToLetter = "million" + " " + NumberToLetter(reste);
              if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " millions";
              if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " millions " + NumberToLetter(reste);
              break;
          case 10:
          case 11:
          case 12:
              quotient = Math.floor(nb / 1000000000);
              reste = nb - quotient * 1000000000;
              if (quotient == 1 && reste == 0) numberToLetter = "milliard";
              if (quotient == 1 && reste != 0) numberToLetter = "milliard" + " " + NumberToLetter(reste);
              if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " milliards";
              if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " milliards " + NumberToLetter(reste);
              break;
          case 13:
          case 14:
          case 15:
              quotient = Math.floor(nb / 1000000000000);
              reste = nb - quotient * 1000000000000;
              if (quotient == 1 && reste == 0) numberToLetter = "billion";
              if (quotient == 1 && reste != 0) numberToLetter = "billion" + " " + NumberToLetter(reste);
              if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " billions";
              if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " billions " + NumberToLetter(reste);
              break;
      }//fin switch

  }

  return NumberToLetter;

})();