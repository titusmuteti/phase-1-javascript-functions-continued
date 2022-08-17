function saturdayFun(message = 'roller-skate') {
    return `This Saturday, I want to ${message}!`; 
}

function mondayWork (message = 'go to the office') {
    return `This Monday, I will ${message}.`;
}

function wrapAdjective (wrapped='*') {
    return function (msg = 'special') {
        return `You are ${wrapped}${msg}${wrapped}!`
    }
}