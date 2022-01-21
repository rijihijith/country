function fetchData(){
    let countryName = country_Name.value;
    //alert(countryName)
     fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
     .then(res=>res.json())
     .then(data=>populateValues(data))
     .catch(err=>console.log(err))
     
     
     
}

function populateValues(country){
   var count_Name = country[0].name
  var count_flag = country[0].flag
  var count_pop =country[0].population
  var count_currency = (country[0].currencies[0].name)
  var count_lang = country[0].languages[0].name
  var count_cap = country[0].capital
    //var currency =
   // alert(count_Name);

   let html_data = `
   <div class="card p -3" style="width: 15rem; ">
  <img class="card-img-top" src="${count_flag}" alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">${count_Name}</h5>
    
    <p class="card-text">Language  :  ${count_lang}</p>
    <p class="card-text">Capital   :${count_cap}</p>
    <p class="card-text">Population:${count_pop}</p>
    <p class="card-text">Currencie :${count_currency}</p>
  </div>
</div>`
document.querySelector("#result").innerHTML=html_data
}