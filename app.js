
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
    const calculateTotal = document.getElementById('display');
    calculateTotal.innerHTML = `<ol>
    <li><h5>Triangle</> ${area} cm <sup>2</sup> <button class="btn btn-primary">covert</button></li>
  </ol>`
})
