const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");


// gets data from API and sets the content of #result div
const getData = function () {
  
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((key) => {
      result.innerText = JSON.stringify(key.quote);
    })
    .catch((error) => console.log(error));
};

function kanyeComes(){
  document.getElementById('kanye').innerHTML= '- Kanye West';
}


// add event listener for #fetchdata button
fetchDataBtn.addEventListener("click", getData);

