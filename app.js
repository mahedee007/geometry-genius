
function inputs(id){
    const input = document.getElementById(id);
    const inputString = input.value;
    const inputNumber = parseFloat(inputString);
    input.value = '';
    return inputNumber;
    
}





document.getElementById('tri-btn').addEventListener('click', function(){
    const triangleWidth = inputs('tri-w');
    const triangleHeight = inputs('tri-h');
    const area = (0.5 * triangleWidth * triangleHeight).toFixed(2);
    const resultItem = document.createElement('li');

    // Create an <h3> tag for the area value
    const areaHeader = document.createElement('h5');
    areaHeader.textContent = `Triangle: ${area}`;
    
    // Create a button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'convert';
    resultItem.appendChild(areaHeader);
    resultItem.appendChild(deleteButton);
    
    const resultList = document.getElementById('result-list');
    resultList.appendChild(resultItem);
})

document.getElementById('ract-btn').addEventListener('click', function(){
    const ractW = inputs('ract-w');
    const ractH = inputs('ract-h');
    const area = (ractW * ractH).toFixed(2);
    // const calculateTotal = document.getElementById('display');
    // const ol = document.createElement('ol');
    // ol.innerHTML = ` <li> ${area} cm<sup>2</sup> <button class="btn btn-primary">Convert</button>`
    // calculateTotal.appendChild(ol);
    // Create a new list item for the result
    const resultItem = document.createElement('li');

    // Create an <h3> tag for the area value
    const areaHeader = document.createElement('h5');
    areaHeader.textContent = `Ractangle: ${area}`;
    
    // Create a button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'convert';
    resultItem.appendChild(areaHeader);
    resultItem.appendChild(deleteButton);
    
    const resultList = document.getElementById('result-list');
    resultList.appendChild(resultItem);
  
})

document.getElementById('para-btn').addEventListener('click', function(){
    const paraB = inputs('para-b');
    const paraH = inputs('para-h');
    const area = (paraB * paraH).toFixed(2);
    const resultItem = document.createElement('li');

    // Create an <h3> tag for the area value
    const areaHeader = document.createElement('h5');
    areaHeader.textContent = `Parallogram: ${area}`;
    
    // Create a button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'convert';
    resultItem.appendChild(areaHeader);
    resultItem.appendChild(deleteButton);
    
    const resultList = document.getElementById('result-list');
    resultList.appendChild(resultItem);
})
