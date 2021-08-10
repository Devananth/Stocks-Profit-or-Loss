var costPrice = document.querySelector('.cost-price');

var quantity = document.querySelector('.quantity');

var sellPrice = document.querySelector('.selling-price');

var opt = document.querySelector('.output');

var btn = document.querySelector('.check');

var error = document.querySelector('.error');

var form = document.querySelector('.container');


document.addEventListener('submit' , (e) => {

    e.preventDefault();

    noerror();

    
    let cp = Number(costPrice.value);
    let quant = Number(quantity.value);
    let sp = Number(sellPrice.value);

    if(cp<0 || quant<0 || sp<0)
    {
        showError();
        return;
    }

    if(sp > cp)
    {
        let profit = ((sp-cp)*quant).toFixed(2);

        let percent = ((profit*100)/cp).toFixed(2);

        opt.innerHTML = `<p>You gained ${percent}%.Your total profit is Rs.${profit}</p>` ;

        form.style.backgroundColor = 'Yellow';

    }
    else
    {
        let loss = ((cp-sp)*quant).toFixed(2);

        let percent = ((loss*100)/cp).toFixed(2);

        opt.innerHTML = `<p>You lost ${percent}%.Your total loss is Rs.${loss}</p>` ;

        form.style.backgroundColor = 'pink';

    }

    opt.style.display = "block";

});

function noerror(){
    error.style.display = 'none';
}

function showError(){
    error.style.display = "block";
}