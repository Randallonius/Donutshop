var chart = null;

window.onload = function () {



	 chart=new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "How do the Donut shops stack up?"
		},
		animationEnabled: false,   // change to true
		data: [
		{
			// Change type to "bar", "area", "spline", "pie",etc.

			type: "bar",
			dataPoints: donut
		}
			]
	});
	chart.render();
}
