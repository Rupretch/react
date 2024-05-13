import Signals from "./Signals";
import Modeleyugi from "./Components/APIYugioh/ModeleYugi";



    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card1.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card2.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card3.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card4.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card5.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card6.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card7.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card8.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card9.value = randomCardData;
    });
    Modeleyugi.getRandomCard().then(randomCardData=>{
        Signals.card10.value = randomCardData;
    });

    setTimeout(() => {
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card11.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card12.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card13.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card14.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card15.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card16.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card17.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card18.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card19.value = randomCardData;
        });
        Modeleyugi.getRandomCard().then(randomCardData=>{
            Signals.card20.value = randomCardData;
        });
                                        
    }
    ,2000)



    
    function handleSubmit(evt) {
        
        evt.preventDefault();
        if (evt.target.checkValidity()) {
            alert("Reçu avec success")
            evt.target.reset();
        }
        return;
    }

    export {handleSubmit} 

