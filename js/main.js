function initializeUI() {
    renderOfficesList();
    renderJobsList();
    renderCurrenciesList();
    calculateExchange();
}

// Compute Currencies
function calculateExchange(){
    const currency = document.getElementById("currency-select");
    const currency_num = currency.options[currency.selectedIndex].value;
    let input_value = document.getElementById('cash-input').value;

    const exchange = input_value * currency_num ;

    let output;
    if(currency.options[currency.selectedIndex].text ==='USD') output = 'GBP';
    if(currency.options[currency.selectedIndex].text ==='GBP') output = 'USD';

    document.getElementById('cash-result').value = output + "         " + exchange.toFixed(2);
}


function swapCurrencies() {
    let select_val =  document.getElementById('currency-select');
    if(select_val.selectedIndex == 0) {
        select_val.selectedIndex = 1;

        calculateExchange();
        return;
    }
    if(select_val.selectedIndex == 1) {
        select_val.selectedIndex = 0;

        calculateExchange();
        return;
    }

}

// Event Listeners
document.getElementById('cash-input').addEventListener('input', calculateExchange);
document.getElementById('currency-select').addEventListener('input', calculateExchange);
document.getElementById('curr-swap').addEventListener('click', swapCurrencies);



window.onload = initializeUI;