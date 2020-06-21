const parser = new DOMParser();

// UI 
function renderOfficesList() {
    let container = document.getElementById('offices-select');
    container.innerHTML = "";
    
    offices.forEach(element => {
        let option_string =`
        <option value="${element.toLowerCase()} id="opt-${element.toLowerCase()}" >${element}</option>
        `;    
        let html = parser.parseFromString(option_string, 'text/html').body.children[0]; 
        container.appendChild(html);
    });
}

function renderJobsList(){
    let container = document.getElementById('jobs-select');
    container.innerHTML = "";
    
    jobs.forEach(element => {
        let option_string =`
        <option value="${element.toLowerCase()} id="opt-${element.toLowerCase()}" >${element}</option>
        `;    
        let html = parser.parseFromString(option_string, 'text/html').body.children[0]; 
        container.appendChild(html);
    });
}

function renderCurrenciesList() {
    let container = document.getElementById('currency-select');
    container.innerHTML = "";
    
    currencies.forEach(element => {
        let option_string =`
        <option value="${element.currency}" id="opt-${element.name.toLowerCase()}" >${element.name}</option>
        `;    
        let html = parser.parseFromString(option_string, 'text/html').body.children[0]; 
        container.appendChild(html);
    });
}