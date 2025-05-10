function start(){
    var countryName = document.getElementById("searchBox").value;

    var url = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(url)
    .then(res => res.json())
    .then(data => process(data));
}

function process(data){
    var oldContent = document.getElementById("displayContent");
    oldContent.textContent = "";
    var country = data[0];

    var currencyObj = country.currencies;
    var currencyKey = Object.keys(currencyObj)[0];
    var currency = `${currencyObj[currencyKey].name} (${currencyObj[currencyKey].symbol})`;
 
    var languages = Object.values(country.languages).join(", ");

    var newDiv = document.createElement("div");
    newDiv.classList.add("innerDivStyle");

    newDiv.innerHTML = `Country Name: ${country.name.common} <br>
                        Capital City: ${country.capital} <br>
                        Flag: <img src="${country.flags.png}"> <br>
                        Currencies: ${currency} <br>
                        Country Region: ${country.region} <br>
                        Country Languages: ${languages} <br>
                        Country Population: ${country.population} <br>`;

    oldContent.appendChild(newDiv);

}

