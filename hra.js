console.log(`AHOJDA lasko copak tu podledáváš` )


const MINIMUM = 20;
const MAXIMUM = 50; 

//alerty

let jmenodobrodruha = window.prompt('Ahojky jak tě mame nazívat?')
console.log('Tvé jméno je ' + jmenodobrodruha + '.')

const máráddobrodružství = window.confirm('Máš rád dobrodružství')

if (máráddobrodružství) {
    window.alert('jsi tu správně ' +jmenodobrodruha+ '.')

let vekUzivatele = window.prompt('jak jsi starý ' + jmenodobrodruha+ '?')

if (Number(vekUzivatele) >= MINIMUM){
    window.alert('Těšíš se na největší dobrodružství svého života?')
}

else {
    if(!isNaN(vekUzivatele)) {
        window.alert('jsi moc mladý na to abys zažil dobrodrůžo, vymysli si větší věk a zažiz dobrodružství s námi!!')
    }
}

}
else{
    window.alert('jdi dále v tomto případě tady nemáš co pohledávat!')
}