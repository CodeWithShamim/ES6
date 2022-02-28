function wecomeMessage(name, greedHandler) {
    // console.log(greedHandler);
    greedHandler(name);
}

function greetMorning(name) {
    console.log('Good morning', name);
}

function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

// call function------------
wecomeMessage('shamim', greetMorning);
wecomeMessage('sakib', greetAfternoon);
wecomeMessage('anamul', greetEvening);