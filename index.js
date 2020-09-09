{
  ("use strict");

  function berechnen() {
    let w = document.getElementById("weiblich");
    let m = document.getElementById("männlich");

    if (w.checked) {
      formelFrau();
    }

    if (m.checked) {
      formelMann();
    }

    let w_or_m = document.getElementsByName("ra");
    let box;
    for (let x = 0; x < w_or_m.length; x++) {
      w_or_m[x].onclick = function () {
        //stackoverflow.com
        if (box == this) {
          this.checked = false;
          box = null;
        } else {
          box = this;
        }
      };
    }
  }

  function mFormel(gewicht, groesse, alter) {
    let result = 66.5 + 13.75 * gewicht + 5.0 * groesse - 6.76 * alter;
    return Math.round(Number(result));
  }

  function wFormel(gewicht, groesse, alter) {
    let result = 655.1 + 9.56 * gewicht + 1.85 * groesse - 4.7 * alter;
    return Math.round(Number(result));
  }

  function formelMann() {
    let alter = document.getElementById("alter").value;
    let gewicht = document.getElementById("gewicht").value;
    let groesse = document.getElementById("grösse").value;

    let input = document.getElementById("alter");
    let input1 = document.getElementById("gewicht");
    let input2 = document.getElementById("grösse");

    let result;

    if (alter < 18 || alter > 99 || isNaN(alter)) {
      result = "<p>Bitte eine korrektes Alter eintragen.</p>";
      fault(input);
    } else if (gewicht < 40 || gewicht > 200 || isNaN(gewicht)) {
      result = "<p>Bitte ein korrektes Gewicht eintragen.</p>";
      fault(input1);
    } else if (groesse < 100 || groesse > 220 || isNaN(groesse)) {
      result = "<p>Bitte eine korrekte Größe eintragen.</p>";
      fault(input2);
    } else {
      result =
        "Dein Grundumsatz beträgt " + mFormel(gewicht, groesse, alter);
      console.log("Res:" + result);
      input.classList.remove("fault");
      input1.classList.remove("fault");
      input2.classList.remove("fault");
    }
    document.getElementById("resultat").innerHTML = result;
  }

  function fault(input) {
    input.classList.add("fault");
  }

  function formelFrau() {
    let alter = document.getElementById("alter").value;
    let gewicht = document.getElementById("gewicht").value;
    let groesse = document.getElementById("grösse").value;

    let input = document.getElementById("alter");
    let input1 = document.getElementById("gewicht");
    let input2 = document.getElementById("grösse");

    let result;

    if (alter < 18 || alter > 99 || isNaN(alter)) {
      result = "<p>Bitte eine korrektes Alter eintragen.</p>";
      fault(input);
    } else if (gewicht < 40 || gewicht > 200 || isNaN(gewicht)) {
      result = "<p>Bitte ein korrektes Gewicht eintragen.</p>";
      fault(input1);
    } else if (groesse < 100 || groesse > 220 || isNaN(groesse)) {
      result = "<p>Bitte eine korrekte Größe eintragen.</p>";
      fault(input2);
    } else {
      result =
        "Dein Grundumsatz beträgt " + wFormel(gewicht, groesse, alter);
      console.log("Res:" + result);
      input.classList.remove("fault");
      input1.classList.remove("fault");
      input2.classList.remove("fault");
    }
    document.getElementById("resultat").innerHTML = result;
  }

  berechnen();
}