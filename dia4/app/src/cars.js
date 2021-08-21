const tbodyCars = document.querySelector('[data-js="tbodyCars"]');
const formCar = document.querySelector('[data-js="formCar"]');
const btnInsertCar = document.querySelector('[data-js="btnInsertCar"]');
const inputCarUrlImage = document.querySelector('[data-js="inputCarUrlImage"]');
const inputCarBrand = document.querySelector('[data-js="inputCarBrand"]');
const inputCarModel = document.querySelector('[data-js="inputCarModel"]');
const inputCarYear = document.querySelector('[data-js="inputCarYear"]');
const inputCarPlate = document.querySelector('[data-js="inputCarPlate"]');
const inputCarColor = document.querySelector('[data-js="inputCarColor"]');

btnInsertCar.addEventListener('click', () => {
  const tbodyCarsHtml = tbodyCars.innerHTML;

  createRowCar();

  formCar.reset();
});

function createRowCar() {
  const randomId = Math.trunc(Math.random() * 1e9);
  const infoCar = [
    { type: 'id', value: randomId },
    { type: 'urlImage', value: inputCarUrlImage.value },
    { type: 'brand', value: inputCarBrand.value },
    { type: 'model', value: inputCarModel.value },
    { type: 'year', value: inputCarYear.value },
    { type: 'plate', value: inputCarPlate.value },
    { type: 'color', value: inputCarColor.value },
  ];

  const btnDeleteCar = createButtonDeleteCar(randomId);

  const rowCar = document.createElement('tr');
  rowCar.dataset.id = randomId;

  infoCar.map(info => {
    rowCar.appendChild(createColumnCar(info.type, info.value));
  });

  const trBtnDeleteCar = document.createElement('td');
  trBtnDeleteCar.classList.add('center');
  trBtnDeleteCar.appendChild(btnDeleteCar);

  rowCar.appendChild(trBtnDeleteCar);

  tbodyCars.appendChild(rowCar);
}

function createButtonDeleteCar(randomId) {
  const btnDeleteCar = document.createElement('button');

  btnDeleteCar.classList.add('btnDeleteCar');
  btnDeleteCar.classList.add('btn');
  btnDeleteCar.classList.add('btn-x');
  btnDeleteCar.classList.add('deeppink');
  btnDeleteCar.dataset.id = randomId;
  btnDeleteCar.innerHTML = `<i class="far fa-trash-alt far-sm">`;

  btnDeleteCar.addEventListener('click', removeRowCar);

  return btnDeleteCar;
}

function createBoxColorCar(color) {
  return `<span style="background-color: ${color}" class="box-color"></span>`;
}

function createImageCar(url) {
  return `<img class="img-car" src="${url}"/>`;
}

function removeRowCar(e) {
  const btnDelRowCar = e.target;
  const id = btnDelRowCar.dataset.id;
  const rowCar = document.querySelector(`tr[data-id="${id}"]`);

  tbodyCars.removeChild(rowCar);

  btnDelRowCar.removeEventListener('click', removeRowCar);
}

function createColumnCar(type, value) {
  const td = document.createElement('td');
  td.classList.add('center');

  switch (type) {
    case 'urlImage':
      td.innerHTML = createImageCar(value);
      break;
    case 'color':
      td.innerHTML = createBoxColorCar(value);
      break;
    default:
      td.innerHTML = value;
  }

  return td;
}
