function start(){
    var countryName = document.getElementById("searchBox").value;

    var url = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(url)
    .then(res => res.json())
    .then(res => process(data));
}

function process(data){
    var oldContent = document.getElementById("displayContent");
    oldContent.textContent = "";
    var country = data[0];

    var newDiv = document.createElement("div");
    newDiv.classList.add("innerDivStyle");

    newDiv.innerHTML = `Country Name: ${}`
}

