
let punkt=0;


function randomZahl(){

    let randomZahl=(Math.random() 10):


}


function gewinn() {

    punkt++;
}

function verlieren() {

    if(punkt) {

        speicherPunkt();
    }
    punkt = 0;
}

function speicherPunkt() {

 prompt('Spielende! Deine Punktzahl war ' + punkt + )

}


('#höher').on('click', function() {


    let neueZahl = randomZahl();

    if(neueZahl > vorZahl) {

        gewinn();
    }

    else {

        verlieren();
    }
    punktstand();
    vorZahl = neueZahl;
});

// ...
('#lower').on('click', function() {

    let neueZahl = er;
    // ...
    if(newNum < prevNum) {

        gewinn();
    }
    // ...
    else if(neueZahl === vorZahl) {

        return;
    }
    // ...
    else {

        verlieren();
    }

    punktstand();
