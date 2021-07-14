
/////////////////
// калькулятор //
/////////////////



/**
 * мікрофреймворк
 * приймає або айдішку або name-аттрибут
*/

let _id = function(el){
    return document.getElementById(el);
}

let _name = function(el){
    return document.getElementsByName(el);
}


// робота з ціною, поле і бігунок
let calcPriceNum = _id('calc_price_num'), // поле
    calcPriceRange = _id('calc_price_range'); // бігунець

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
let calcEngine = _id('calc_engine'), // поле
    calcEngineRange = _id('calc_engine_range'); // бігунець

// зміна у полі міняє бігунок
calcEngine.addEventListener('input', function(){
    calcEngineRange.value = this.value;

    if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((50 * euro) * (calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro) *(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
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
        calcTax.textContent = 0; ////////////////
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
                calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
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
let calcType = _name('types'), // кнопка типу, дефолтне значення -- бензин
    blockVoltage = _id('block_voltage'), // додатковий блок, який з’являється по кліку
    calcVoltageSum = _id('calc_voltage_sum');

// дефолтне знаячення
calcType.value = 'patrol';

// клікаємо на кнопку типу двигуна
calcType.forEach(function(index){
    index.addEventListener('click', function(){
        calcType.value = this.value;
    
        if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
            if(calcAge.value <= 15){
                if(calcEngine.value <= 3000){
                    calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                    calcExcise.textContent = Math.round(50 * euro);
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*calcAge.value);
                    calcExcise.textContent = Math.round(100 * euro);
                }
            }
            
            if(calcAge.value > 15){
                if(calcEngine.value <= 3000){
                    calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*15);
                    calcExcise.textContent = Math.round(50 * euro);
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*15);
                    calcExcise.textContent = Math.round(100 * euro);
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
                    calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                    calcExcise.textContent = Math.round(75 * euro);
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                    calcExcise.textContent = Math.round(150 * euro);
                }
            }
            
            if(calcAge.value > 15){
                if(calcEngine.value <= 3000){
                    calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*15); // 75euro -- 84$
                    calcExcise.textContent = Math.round(75 * euro);
                }else if(calcEngine.value > 3000){
                    calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                    calcExcise.textContent = Math.round(150 * euro);
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
let calcPower = _id('calc_power'),
    calcPowerRange = _id('calc_power_range');

calcPower.value = calcPowerRange.value;

calcPower.addEventListener('input', function(){
    calcPowerRange.value = this.value;
    calcVoltageSum.textContent = Math.round(this.value * euro); // виводимо ціну електрордвигунів, єври перемножуємо у долари
        
        // подадток на додану вартість -- 20%
        calcTaxSum.textContent = Math.round((+calcPriceNum.value + +calcAuction.textContent + Math.round(calcPriceRange.value/10) + +calcExciseSum.textContent)/5);
});

calcPowerRange.addEventListener('input', function(){
    calcPower.value = this.value;
    calcVoltageSum.textContent = Math.round(this.value * euro); // виводимо ціну електрордвигунів, єври перемножуємо у долари

});

// вік авто
let calcAge = _id('calc_age'),
    calcAgeRange = _id('calc_age_range');

calcAge.value = calcAgeRange.value;

calcAge.addEventListener('input', function(){
    calcAgeRange.value = this.value;

    if(calcType.value == 'patrol' || calcType.value == 'hybryd') { // бензиновий двигун || гібрид
    
        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
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
                calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*calcAge.value); // (50euro -- 56$)
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*calcAge.value);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((50 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(50 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((100 * euro)*(calcEngine.value/1000)*15);
                calcExcise.textContent = Math.round(100 * euro);
            }
        }

        blockVoltage.style.display = 'none';
        calcDutySum.textContent = calcPriceRange.value/10;
        calcDuty.textContent = 10;
        
    }else if(calcType.value == 'disel'){ // дизельний

        if(calcAge.value <= 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*calcAge.value); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*calcAge.value); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
            }
        }
        
        if(calcAge.value > 15){
            if(calcEngine.value <= 3000){
                calcExciseSum.textContent = Math.round((75 * euro)*(calcEngine.value/1000)*15); // 75euro -- 84$
                calcExcise.textContent = Math.round(75 * euro);
            }else if(calcEngine.value > 3000){
                calcExciseSum.textContent = Math.round((150 * euro)*(calcEngine.value/1000)*15); // 150euro -- 168.69$
                calcExcise.textContent = Math.round(150 * euro);
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
let calcAuctionNames = _name('auction'),
    calcAuction = _id('calc_auction');

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
let sel = _id('calc_city_select'),
    calcCity = _id('calc_city'),
    calcPort = _id('calc_port'),
    calcDay = _id('calc_day'),
    calcDelivery = _id('calc_delivery');


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
let calcExciseSum = _id('calc_excise_sum'), // Акциз
    calcDutySum = _id('calc_duty_sum'), // Пошлина
    calcTaxSum = _id('calc_tax_sum'), // НДС
    calcRetireeSum = _id('calc_retiree_sum'), // пенсионный фонд

    calcExcise = _id('calc_excise'), // 50-100, 75-150
    calcDuty = _id('calc_duty'), // 10%
    calcTax = _id('calc_tax'), // 20%
    calcRetiree = _id('calc_retiree'); // 4%

// Комиссия компании fafa.ua -- 500
let calcFafa = _id('calc_fafa');

// кнопка
let calcButton = _id('calc_get_total'),
    calcResult = _id('calc_result');

calcButton.addEventListener('click', function(){

    // якщо не електро
    if(calcType.value != 'voltage'){
        calcResult.textContent = Math.round(+calcPriceNum.value + +calcAuction.textContent + +calcCity.textContent + +calcDelivery.textContent + +calcDutySum.textContent + +calcExciseSum.textContent + +calcTaxSum.textContent + +calcRetireeSum.textContent + 500);
    }else{
        calcResult.textContent = Math.round(+calcPriceNum.value + +calcAuction.textContent + +calcCity.textContent + +calcDelivery.textContent + +calcDutySum.textContent + +calcExciseSum.textContent + +calcTaxSum.textContent + +calcRetireeSum.textContent + 500 + +calcVoltageSum.textContent);
    }

});


// TODO calc_age !=0 
// не може бути 0



//