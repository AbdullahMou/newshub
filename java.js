var old = prompt('how old are you');
var status;

while (old =='' || old ==null || isNaN(old) || old >66 ) {
old = prompt('YOU ARE SO ANCIENT ===> HOW OLD ARE YOU');

}

function ageness(num){
    var  paymint ;
    paimint = old *1.1;
    return paimint;
    }

if ( old > 18 && 55 > old) {
status= 'YOU HAVE TO PAID TO NEWSHUB VIP MEMBER FIRST !';
}

else if (old <=18) {
status = 'YOU DONT HAVE TO BE HERE !';
}

else if (old >=55) {
status = 'YOU ABOUT TO DIY! ' ;}

  

document.write('<h3>' + status + '  ======> ========> =======> '+' your monthly paymint is : '  +  ageness(status) + ' $  for VIP club ' + '<h3>');


