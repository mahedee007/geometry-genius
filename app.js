document.getElementById('tri-btn').addEventListener('click', function(){
    const triangleWidth = document.getElementById('tri-w');
    const triangleWidthString = triangleWidth.value;
    const triangleWidthNumber = parseFloat(triangleWidthString);
    const triangleHeight = document.getElementById('tri-h');
    const triangleHeightString = triangleHeight.value;
    const triangleHeightNumber = parseFloat(triangleHeightString);
    const area = (0.5 * triangleWidthNumber * triangleHeightNumber).toFixed(2);
    triangleWidth.value = '';
    triangleHeight.value = '';
    const calculateTotal = document.getElementById('display');
    calculateTotal.innerHTML = `<ol>
    <li>{$area}cm <sup>2</sup> <button>covert</button></li>
  </ol>`
})