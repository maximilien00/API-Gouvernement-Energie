// console.log("test");

// let requestURL = 'https://odre.opendatasoft.com/api/records/1.0/search/?dataset=eco2mix-regional-tr&q=&lang=fr&facet=libelle_region&facet=nature&facet=date_heure';
let requestURL = 'https://calendrier.api.gouv.fr/jours-feries/metropole/2022.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const response = request.response;
  console.log(response);
  console.log(response);
    // console.log(response.records[0].fields.libelle_region);
    // console.log(response.records[0].fields.date);
    // console.log(response.records[0].fields.date_heure);
}