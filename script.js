function showTool(tool) {
  const inputBox = document.getElementById('inputFields');
  const resultBox = document.getElementById('resultBox');
  resultBox.innerText = '';  // Clear result section

  let html = '';
  switch (tool) {
    case 'cube':
      html = `
        <input type="number" id="cubeInput" placeholder="Enter a number for cube" />
        <p id="cubeResult"></p>`;
      break;

    case 'area':
      html = `
        <input type="number" id="length" placeholder="Enter length" />
        <input type="number" id="width" placeholder="Enter width" />
        <p id="areaResult"></p>`;
      break;

    case 'squareRoot':
      html = `
        <input type="number" id="squareInput" placeholder="Enter a number for square root" />
        <p id="squareRootResult"></p>`;
      break;

    case 'perimeter':
      html = `
        <input type="number" id="perimeterLength" placeholder="Enter length" />
        <input type="number" id="perimeterWidth" placeholder="Enter width" />
        <p id="perimeterResult"></p>`;
      break;

    case 'volume':
      html = `
        <input type="number" id="volumeLength" placeholder="Enter length" />
        <input type="number" id="volumeWidth" placeholder="Enter width" />
        <input type="number" id="volumeHeight" placeholder="Enter height" />
        <p id="volumeResult"></p>`;
      break;
  }

  inputBox.innerHTML = html;
}

function calculate() {
  const resultBox = document.getElementById('resultBox');
  let result = '';

  // Cube calculation
  const cubeInput = document.getElementById('cubeInput');
  if (cubeInput) {
    const num = parseFloat(cubeInput.value);
    if (!isNaN(num)) {
      result = `The cube of ${num} is: ${Math.pow(num, 3)}`;
      document.getElementById('cubeResult').innerText = result;
    } else {
      result = 'Please enter a valid number.';
    }
  }

  // Area calculation
  const length = document.getElementById('length');
  const width = document.getElementById('width');
  if (length && width) {
    const len = parseFloat(length.value);
    const wid = parseFloat(width.value);
    if (!isNaN(len) && !isNaN(wid)) {
      result = `The area is: ${len * wid}`;
      document.getElementById('areaResult').innerText = result;
    } else {
      result = 'Please enter valid values for length and width.';
    }
  }

  // Square Root calculation
  const squareInput = document.getElementById('squareInput');
  if (squareInput) {
    const num = parseFloat(squareInput.value);
    if (!isNaN(num)) {
      const sqrtValue = Math.sqrt(num);
      result = `The square root of ${num} is: ${sqrtValue}`;
      document.getElementById('squareRootResult').innerText = result;
    } else {
      result = 'Please enter a valid number.';
    }
  }

  // Perimeter calculation
  const perimeterLength = document.getElementById('perimeterLength');
  const perimeterWidth = document.getElementById('perimeterWidth');
  if (perimeterLength && perimeterWidth) {
    const len = parseFloat(perimeterLength.value);
    const wid = parseFloat(perimeterWidth.value);
    if (!isNaN(len) && !isNaN(wid)) {
      result = `The perimeter is: ${2 * (len + wid)}`;
      document.getElementById('perimeterResult').innerText = result;
    } else {
      result = 'Please enter valid values for length and width.';
    }
  }

  // Volume calculation
  const volumeLength = document.getElementById('volumeLength');
  const volumeWidth = document.getElementById('volumeWidth');
  const volumeHeight = document.getElementById('volumeHeight');
  if (volumeLength && volumeWidth && volumeHeight) {
    const len = parseFloat(volumeLength.value);
    const wid = parseFloat(volumeWidth.value);
    const height = parseFloat(volumeHeight.value);
    if (!isNaN(len) && !isNaN(wid) && !isNaN(height)) {
      result = `The volume is: ${len * wid * height}`;
      document.getElementById('volumeResult').innerText = result;
    } else {
      result = 'Please enter valid values for length, width, and height.';
    }
  }

  resultBox.innerText = result;
}
