var old = prompt('how old are you');
var greeting;

if ( old > 18 && 55 > old) {
greeting= 'YOU HAVE TO PAID TO NEWSHUB VIP MEMBER FIRST !';
}

else if (old <18) {
greeting = 'YOU DONT HAVE TO BE HERE !';
}

else if (old >55) {
greeting = 'YOU ABOUT TO DIY! ' ;}
document .write( ' <h3>' +greeting + ' </ h3>');