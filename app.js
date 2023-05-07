const cocktailContainer = document.querySelector(".all_cocktail_container");
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var arr = [];
window.onload = async function () {
  console.log("called");
  const response = await fetch(url);
  const data = await response.json();
  arr = data.drinks;
  console.log(arr);
  console.log(arr[0].strDrinkThumb);
  print();
};

function print() {
  cocktailContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    cocktailContainer.innerHTML += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${arr[i].strDrinkThumb}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Name : ${arr[i].strDrink}</h5>
      <p class="card-text">Type : ${arr[i].strAlcoholic}</p>
      <p class="card-text">Category  : ${arr[i].strCategory}</p>
      <a href="./info.html" class="btn btn-primary" onclick="setID(${arr[i].idDrink})">Read More</a>
    </div>
  </div>`;
  }
}

async function toSearch() {
  let dummyarr = [];
  const inp = document.querySelector(".f_inp");
  if (inp.value != "") {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inp.value}`;
    console.log(inp.value, url);
    const response = await fetch(url);
    const data = await response.json();
    dummyarr = data.drinks;
    cocktailContainer.innerHTML = "";
    if (dummyarr != null) {
      for (let i = 0; i < dummyarr.length; i++) {
        cocktailContainer.innerHTML += `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${dummyarr[i].strDrinkThumb}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Name : ${dummyarr[i].strDrink}</h5>
          <p class="card-text">Type : ${dummyarr[i].strAlcoholic}</p>
          <p class="card-text">Category  : ${dummyarr[i].strCategory}</p>
          <a class="btn btn-primary" href="./info.html" onclick="setID(${dummyarr[i].idDrink})">Read More</a>
        </div>
      </div>`;
      }
    } else {
      console.log("came here");
      cocktailContainer.insertAdjacentHTML(
        "beforebegin",
        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Not Found</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
      );
    }
  }
}

function setID(id) {
  console.log(id);
  sessionStorage.setItem("CDBid", id);
}
