
/////////////////
// калькулятор //
/////////////////

// 1 $ == 0.884 euro
// 11246 $ == 10000 euro

let euro = 1.1246;

/**
 * мікрофреймворк
 * приймає або айдішку або name-аттрибут
 */
let __ = function(param){
    let el = param.match(/(#?)(.+)/);
    if(el[1])
        return document.getElementById(el[2]);
    return document.getElementsByName(el[2]);
}

// робота з ціною, поле і бігунок
let calcPriceNum = document.getElementById('calc_price_num'), // поле
    calcPriceRange = document.getElementById('calc_price_range'); // бігунець

calcPriceRange.value = calcPriceNum.value;

// зміна ціни бігунком
calcPriceRange.addEventListener('input', function() {
    calcPriceNum.value = this.value;

    if(calcType.value != 'voltage'){
        // мито 10% від ціни
        calcDutySum.textContent = Math.round(calcPriceRange.value/10);
    }else{
        // якщо електродвигун -- мито не знімається
        calcDutySum.textContent = 0;
    }

    // податок у пенсійний фонд
    calcRetireeSum.textContent = Math.round(calcPriceRange.value/100*4);

    // подадток на додану вартість -- 20%
    calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);

});

// зміна ціни вручну
calcPriceNum.addEventListener('input', function(){
    calcPriceRange.value = this.value;

    if(calcType.value != 'voltage'){
        // 10% від ціни
        calcDutySum.textContent = Math.round(calcPriceRange.value/10);
    }else{
        // якщо електродвигун -- мито не знімається
        calcDutySum.textContent = 0;
    }

    // податок у пенсійний фонд
    calcRetireeSum.textContent = Math.round(calcPriceRange.value/100*4);

    // подадток на додану вартість -- 20%
    calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
});

// об’єм двигуна
let calcEngine = document.getElementById('calc_engine'), // поле
    calcEngineRange = document.getElementById('calc_engine_range'); // бігунець

// зміна у полі міняє бігунок
calcEngine.addEventListener('input', function(){
    calcEngineRange.value = this.value;

    if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = '+112';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+112';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;

    }else{ // електро
        blockVoltage.style.display = 'block';
        calcDutySum.textContent = 0;
        calcExciseSum.textContent = 0;
        calcDuty.textContent = 0;
        calcExcise.textContent = 0;
    }
        
        // подадток на додану вартість -- 20%
        calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
    
});

// зміна бігунка міняє значення поля
calcEngineRange.addEventListener('input', function(){
    calcEngine.value = this.value;

    if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = '+112';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+112';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;

    }else{ // електро
        blockVoltage.style.display = 'block';
        calcDutySum.textContent = 0;
        calcExciseSum.textContent = 0;
        calcDuty.textContent = 0;
        calcExcise.textContent = 0;
    }
        
    // подадток на додану вартість -- 20%
    calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
    
});

// тип двигуна
let calcType = document.getElementsByName('types'), // кнопка типу, дефолтне значення -- бензин
    blockVoltage = document.getElementById('block_voltage'), // додатковий блок, який з’являється по кліку
    calcVoltageSum = document.getElementById('calc_voltage_sum');

// дефолтне знаячення
calcType.value = 'patrol';

// клікаємо на кнопку типу двигуна
calcType.forEach(function(index){
    index.addEventListener('click', function(){
        calcType.value = this.value;
    
        if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
            if(calcAge.value <= 15){
                if(calcEngine.value <= 3000){
                    calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                    calcExcise.textContent = '+56';
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*calcAge.value);
                    calcExcise.textContent = '+112';
                }
            }
            
            if(calcAge.value > 15){
                if(calcEngine.value <= 3000){
                    calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*15);
                    calcExcise.textContent = '+56';
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*15);
                    calcExcise.textContent = '+112';
                }
            }
    
            blockVoltage.style.display = 'none';
            calcDutySum.textContent = calcPriceRange.value/10;
            calcDuty.textContent = 10;

            // подадток на додану вартість -- 20%
            calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
            
        }else if(calcType.value == 'disel'){ // дизельний
    
            if(calcAge.value <= 15){
                if(calcEngine.value <= 3000){
                    calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                    calcExcise.textContent = '+84';
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                    calcExcise.textContent = '+169';
                }
            }
            
            if(calcAge.value > 15){
                if(calcEngine.value <= 3000){
                    calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*15); // 75euro -- 84$
                    calcExcise.textContent = '+84';
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                    calcExcise.textContent = '+169';
                }
            }
    
            blockVoltage.style.display = 'none';
            calcDutySum.textContent = calcPriceRange.value/10;
            calcDuty.textContent = 10;

            // подадток на додану вартість -- 20%
            calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
    
        }else{ // електро
            blockVoltage.style.display = 'block';
            calcDutySum.textContent = 0;
            calcExciseSum.textContent = 0;
            calcDuty.textContent = 0;
            calcExcise.textContent = 0;

            // подадток на додану вартість для електродвигунів -- 0!
            calcTaxSum.textContent = 0;

        }
        


    });
});

// додатковий блок для еклектродвигунів
let calcPower = document.getElementById('calc_power'),
    calcPowerRange = document.getElementById('calc_power_range');

calcPower.value = calcPowerRange.value;

calcPower.addEventListener('input', function(){
    calcPowerRange.value = this.value;
    calcVoltageSum.textContent = Math.round(this.value * 1.12); // виводимо ціну електрордвигунів, єври перемножуємо у долари
    //calcVoltageSum.textContent = Number((this.value * 1.12).toFixed(2));
        
        // подадток на додану вартість -- 20%
        calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
});

calcPowerRange.addEventListener('input', function(){
    calcPower.value = this.value;
    calcVoltageSum.textContent = Math.round(this.value * 1.12); // виводимо ціну електрордвигунів, єври перемножуємо у долари
    //calcVoltageSum.textContent = Number((this.value * 1.12).toFixed(2));

});

// вік авто
let calcAge = document.getElementById('calc_age'),
    calcAgeRange = document.getElementById('calc_age_range');

calcAge.value = calcAgeRange.value;

calcAge.addEventListener('input', function(){
    calcAgeRange.value = this.value;

    if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = '+112';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+112';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;

    }else{ // електро
        blockVoltage.style.display = 'block';
        calcDutySum.textContent = 0;
        calcExciseSum.textContent = 0;
        calcDuty.textContent = 0;
        calcExcise.textContent = 0;
    }
        
    // подадток на додану вартість -- 20%
    calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
    
});

calcAgeRange.addEventListener('input', function(){
    calcAge.value = this.value;

    if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = '+112';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(56*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+56';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(112*(calcEngine.value/1000)*15);
                calcExcise.textContent = '+112';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round(84*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = '+84';
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round(169*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = '+169';
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;

    }else{ // електро
        blockVoltage.style.display = 'block';
        calcDutySum.textContent = 0;
        calcExciseSum.textContent = 0;
        calcDuty.textContent = 0;
        calcExcise.textContent = 0;
    }
        
    // подадток на додану вартість -- 20%
    calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
    
});

// відсоток, який бере аукціон
let calcAuctionNames = document.getElementsByName('auction'),
    calcAuction = document.getElementById('calc_auction');

// динамічна зміна відсотку аукціону
calcAuctionNames.forEach(function(index){
    index.addEventListener('click', function(){
        calcAuction.textContent = this.value;

        if(calcType.value != 'voltage'){
            // подадток на додану вартість -- 20%
            calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
        }else{
            // подадток на додану вартість -- 0
            calcTaxSum.textContent = 0;
        }

    });
});

// доставка по США
let sel = document.getElementById('calc_city_select'),
    calcCity = document.getElementById('calc_city'),
    calcPort = document.getElementById('calc_port'),
    calcDay = document.getElementById('calc_day'),
    calcDelivery = document.getElementById('calc_delivery');


calcCity.textContent = sel.value;
calcPort.textContent = sel[sel.selectedIndex].getAttribute('data-port');
calcDay.textContent = sel[sel.selectedIndex].getAttribute('data-days');
calcDelivery.textContent = sel[sel.selectedIndex].getAttribute('data-sea');

// міняємо значення ціни доставки, часу доставки, порту, ціни транспортування в межах США
sel.addEventListener('change', function(){
    calcCity.textContent = sel.value;
    calcPort.textContent = sel[sel.selectedIndex].getAttribute('data-port');
    calcDay.textContent = sel[sel.selectedIndex].getAttribute('data-days');
    calcDelivery.textContent = sel[sel.selectedIndex].getAttribute('data-sea');
});

// Акциз Пошлина НДС Налог в пенсионный фонд 
let calcExciseSum = document.getElementById('calc_excise_sum'), // Акциз
    calcDutySum = document.getElementById('calc_duty_sum'), // Пошлина
    calcTaxSum = document.getElementById('calc_tax_sum'), // НДС
    calcRetireeSum = document.getElementById('calc_retiree_sum'), // пенсионный фонд

    calcExcise = document.getElementById('calc_excise'), // 50-100, 75-150
    calcDuty = document.getElementById('calc_duty'), // 10%
    calcTax = document.getElementById('calc_tax'), // 20%
    calcRetiree = document.getElementById('calc_retiree'); // 4%

// Комиссия компании fafa.ua -- 500
let calcFafa = document.getElementById('calc_fafa');

// кнопка
let calcButton = document.getElementById('calc_get_total'),
    calcResult = document.getElementById('calc_result');

calcButton.addEventListener('click', function(){
    // calcResult.textContent = calcAuction.textContent;

    // якщо не електро
    if(calcType.value != 'voltage'){
        calcResult.textContent = Math.round(+calcPriceNum.value + +calcAuction.textContent + +calcCity.textContent + +calcDelivery.textContent + +calcDutySum.textContent + +calcExciseSum.textContent + +calcTaxSum.textContent + +calcRetireeSum.textContent + 500); // calcPriceNum.value + calcAuction + calcCity + calcDelivery + calcDutySum + calcExciseSum + calcTaxSum + calcRetireeSum + 500
    }else{
        calcResult.textContent = Math.round(+calcPriceNum.value + +calcAuction.textContent + +calcCity.textContent + +calcDelivery.textContent + +calcDutySum.textContent + +calcExciseSum.textContent + +calcTaxSum.textContent + +calcRetireeSum.textContent + 500 + +calcVoltageSum.textContent); // calc_price_num + calc_auction + calc_city + calc_delivery + calc_duty_sum + calc_excise_sum + calc_tax_sum + calc_retiree_sum + 500 + calc_voltage_sum
    }

});


// TODO calc_age !=0 
// не може бути 0

let _ = (param) => console.log(param);

// _('test', 1, 2, 3);
// _(1, 2, 3);
// _(2, 3);



//