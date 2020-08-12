//  var cookTime = ((Funtction to get cook times of each recipe))
//  var prepTime = ((Function to get prep times of each recipe))
//  var extraTime = ((Function to get all other types of cook times of each recipe))
//  var timeTotal = ((Function to get the total time to create each recipe))
 
//  var numIngredients = ((Function to count number of ingredients for each recipe))
//  var numSteps = ((Function to count number of steps for each recipe))

 var appetizer = {
    x: [1, 2, 3, 4, 5], //cookTime, prepTime, extraTime, timeTotal
    y: [1, 6, 3, 6, 1],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Appetizers',
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    textposition: 'top center',
    textfont: {
      family:  'Raleway, sans-serif'
    },
    marker: { size: 12 }
  };
  
  var breakfast = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Breakfast',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var brunch = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Brunch',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var dessert = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Desserts',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var dinner = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Dinners',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var drink = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Drinks',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var lunch = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Lunch',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var salad = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Salads',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var sandwich = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Sandwiches',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var sideDish = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Side Dishes',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var snack = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Snacks',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var soup = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Soups',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var soupStew = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Soups and Stews',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

  var stew = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5], //cookTime, prepTime, extraTime, timeTotal
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Stews',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };

function init() {
  var data = [ appetizer, breakfast, brunch, dessert, dinner, drink, lunch, salad, sandwich, sideDish, snack, soup, soupStew, stew ];
  
  var layout = {
    xaxis: {
      range: [ 0.75, 5.25 ]
    },
    yaxis: {
      range: [0, 8]
    },
    legend: {
      y: 0.5,
      yref: 'paper',
      font: {
        family: 'Arial, sans-serif',
        size: 20,
        color: 'grey',
      }
    },
    title:'Data Labels on the Plot'
  };
  
  Plotly.newPlot('scatterPlot', data, layout);
}

d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  var x = [];
  var y = [];

  if (dataset === 'dataset1') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }

  if (dataset === 'dataset2') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();