  <script type="text/javascript"> //variable info for each donut shop
 var voodoo = {
  shopName: "Voodoo Donuts",
  minCust: "4",
  maxCust: "37",
  avgDon: "2",
  HrsOp: "24"
};

var blueStar = {
  shopName: "Blue Star Donuts",
  minCust: "8",
  maxCust: "43",
  avgDon: "4.5",
  HrsOp: "11",
};

var coco = {
  shopName: "Coco",
  minCust: "9",
  maxCust: "23",
  avgDon: "6.33",
  HrsOp: "11",
};

var tonallis = {
  shopName: "Tonallis Donuts & Cream",
  minCust: "2",
  maxCust: "28",
  avgDon: "1.25",
  HrsOp: "17",
};

var sesame = {
  shopName: "Sesame Donuts",
  minCust: "8",
  maxCust: "58",
  avgDon: "3.75",
  HrsOp: "24",
};
var donut = new Array();
  donut.push(voodoo);
  donut.push(blueStar);
  donut.push(coco);
  donut.push(tonallis);
  donut.push(sesame);
</script>


<script type="text/javascript"> //JavaScript for table
for (var index = 0; index < donut.length; index++) {
document.write("<tr>");
document.write("<td>" + donut[index].shopName + "</td>");
document.write("<td>" + donut[index].minCust + "</td>");
document.write("<td>" + donut[index].maxCust + "</td>");
document.write("<td>" + donut[index].avgDon + "</td>");
document.write("<td>" + donut[index].HrsOp + "</td>");
document.write("</tr>");
}
</script>
