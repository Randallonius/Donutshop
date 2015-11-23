document.addEventListener("DOMContentLoaded", initializePage);

function initializePage() {
  document.getElementById("donutshopselect").addEventListener("change", showShop);
}

function showShop() {
  var shopholder = document.getElementById("donutshops");
  var shopIndex = parseInt(this.value);
  var selectedShop = donut[shopIndex];
  shopholder.innerHTML = "<td>"+selectedShop.generateData()+"</td>";
  shopholder.innerHTML = "<h2>"+selectedShop.shopName+"</h2>";
  shopholder.innerHTML += "<table>"+selectedShop.writeTableData()+"</table>";
  document.getElementById("minCust").addEventListener("change", updateShop);
  document.getElementById("maxCust").addEventListener("change", updateShop);
  document.getElementById("avgDon").addEventListener("change", updateShop);

function updateShop(changed) {
  var newDonut = parseInt(this.value));
  currentShop = donut[shopIndex];

}
}
