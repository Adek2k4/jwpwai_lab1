const PLNEUR = 4.24;
const PLNGBP = 4.89;
const PLNUSD = 3.64;
const PLNJPY = 0.024;
const PLNCHF = 4.59;


exports.euro_to_pln = function(euro){
    return (euro * PLNEUR).toFixed(2);
}
exports.pound_to_pln = function(pound){
    return (pound * PLNGBP).toFixed(2);
}
exports.usd_to_pln = function(usd){
    return (usd * PLNUSD).toFixed(2);
}
exports.yen_to_pln = function(yen){
    return (yen * PLNJPY).toFixed(2);
}
exports.chf_to_pln = function(chf){
    return (chf * PLNCHF).toFixed(2);
}
