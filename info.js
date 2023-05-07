const Isrc = document.querySelector(".info_img");
const RNC = document.querySelector(".right_info_container");
window.onload = async function () {
  let arr = Array.from(RNC.children);
  console.log(Array.from(RNC.children));
  console.log("this is called");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${sessionStorage.getItem(
    "CDBid"
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data, arr);
  Isrc.src = data.drinks[0].strDrinkThumb;
  arr[0].innerText += data.drinks[0].strDrink;
  arr[1].innerText += data.drinks[0].strAlcoholic;
  arr[2].innerText += data.drinks[0].strCategory;
  arr[3].innerText +=
    data.drinks[0].strIngredient1 +
    " ," +
    data.drinks[0].strIngredient2 +
    " ," +
    data.drinks[0].strIngredient3;
  arr[5].innerHTML +=
    data.drinks[0].strInstructions +
    "<br>" +
    data.drinks[0].strInstructionsDE +
    "<br>" +
    data.drinks[0].strInstructionsIT;
};
