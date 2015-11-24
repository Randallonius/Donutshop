document.addEventListener("DOMContentLoaded", initializePage);

var selectedShop = null;

function initializePage() {
  document.getElementById("donutshopselect").addEventListener("change", showShop);
}


function showShop() {

  var shopIndex = parseInt(this.value);
  selectedShop = donut[shopIndex];
  buildTable();
}
function buildTable() {
  var shopholder = document.getElementById("donutshops");
  selectedShop.generateData();
  shopholder.innerHTML = "<h2>"+selectedShop.shopName+"</h2>";
  shopholder.innerHTML += "<table>"+selectedShop.writeTableData()+"</table>";
  document.getElementById("minCust").addEventListener("change", updateShop);
  document.getElementById("maxCust").addEventListener("change", updateShop);
  document.getElementById("avgDon").addEventListener("change", updateShop);
}

function updateShop() {
selectedShop[this.id] = parseFloat(this.value);
buildTable();
}
