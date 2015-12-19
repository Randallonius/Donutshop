var donutShop = function (shopName, minCust, maxCust, avgDon, hrsOp) {
  this.shopName = shopName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgDon = avgDon;
  this.hrsOp = hrsOp;
  this.currentIndex = 0;
  this.label = shopName;
  this.y =0;

  this.generateData = function() {
    this.hours = new Array ();
    this.customersPerHour = new Array ();
    this.donutPerHour = new Array ();
    this.totCust = 0;
    this.totDon = 0;

    for (var index = 0; index < this.hrsOp; index++) {
      this.hours.push(index);
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      this.donutPerHour.push(Math.floor(this.customersPerHour[index] * this.avgDon));
      this.totCust += this.customersPerHour[index];
      this.totDon += this.donutPerHour[index];
    }
    this.y = this.totCust;
}

  this.writeTableData = function() {//Creates the table
    var   tableRow =  "<th>"+'Minimum Customers/Hour'+"</th>";
          tableRow +=  "<th>"+'Maximum Customers/Hour'+"</th>";
          tableRow +=  "<th>"+'Average Donuts/Customer'+"</th>";
          tableRow += "<tr><td><input id='minCust' type='number' value='"+this.minCust+"'></td>";
          tableRow += "<td><input id='maxCust' type='number' value='"+this.maxCust+"'></td>";
          tableRow += "<td><input id='avgDon' type='number' value='"+this.avgDon+"'></td></tr>";
          tableRow +=  "<th>"+'Hours'+"</th>";
          tableRow +=  "<th>"+'Customers Per Hour'+"</th>";
          tableRow +=  "<th>"+'Donuts Needed'+"</th>";
            for (var hrsOp = 0; hrsOp < this.hours.length; hrsOp++){
            this.hours[hrsOp] = hrsOp + 1;
          tableRow += "<tr><td>"+this.hours[hrsOp]+"</td>";//tabulates the hours open
          tableRow += "<td>"+this.customersPerHour[hrsOp]+"</td>";//generates random cust/hr
          tableRow += "<td>"+this.donutPerHour[hrsOp]+"</td></tr>";}//generates random don/hr
          tableRow +=  "<th>"+'Totals for the Day:'+"</th>";
          tableRow +=  "<th>"+this.totCust+"</th>";
          tableRow +=  "<th>"+this.totDon+"</th>";
          return tableRow;
    }

var donut = new Array();
  donut.push(new donutShop("Voodoo Donuts", 4, 37, 2, 24));
  donut.push(new donutShop("Blue Star Donuts", 8, 43, 4.5, 11));
  donut.push(new donutShop("Coco", 9, 23, 6.33, 11));
  donut.push(new donutShop("Tonallis Donuts & Cream", 2, 28, 1.25, 17));
  donut.push(new donutShop("Sesame Donuts", 8, 58, 3.75, 24));

    for (var index = 0; index < donut.length; index++) {
      donut[index].generateData();
    }
