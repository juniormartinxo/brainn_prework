import { get, post, del } from './http';

const tbodyCars = document.querySelector('[data-js="tbodyCars"]');
const formCar = document.querySelector('[data-js="formCar"]');
const btnInsertCar = document.querySelector('[data-js="btnInsertCar"]');
const image = document.querySelector('[data-js="inputCarUrlImage"]');
const brand = document.querySelector('[data-js="inputCarBrand"]');
const model = document.querySelector('[data-js="inputCarModel"]');
const year = document.querySelector('[data-js="inputCarYear"]');
const plate = document.querySelector('[data-js="inputCarPlate"]');
const color = document.querySelector('[data-js="inputCarColor"]');

const url = 'http://localhost:3333/cars';

btnInsertCar.addEventListener('click', async () => {
  const randomId = Math.trunc(Math.random() * 1e9);
  const tbodyCarsHtml = tbodyCars.innerHTML;

  const dataCars = {
    id: randomId,
    image: image.value,
    brand: brand.value,
    model: model.value,
    year: year.value,
    plate: plate.value,
    color: color.value,
  };

  try {
    const result = await post(url, dataCars);

    if (result.error) {
      //console.log('deu erro na hora de cadastrar', result.message);
      alertMessage(result.message);
      return;
    }

    createRowCar(dataCars);

    formCar.reset();
  } catch (e) {
    alertMessage('Algo deu errado ao tentar inserir o veículo!');
  }
});

function createRowCar(dataCars) {
  const infoCar = [
    { type: 'id', value: dataCars.id },
    {
      type: 'image',
      value: {
        src: dataCars.image,
        brand: dataCars.brand,
        model: dataCars.model,
      },
    },
    { type: 'text', value: dataCars.brand },
    { type: 'text', value: dataCars.model },
    { type: 'text', value: dataCars.year },
    { type: 'text', value: dataCars.plate },
    { type: 'color', value: dataCars.color },
  ];

  const btnDeleteCar = createButtonDeleteCar(dataCars.id);

  const rowCar = document.createElement('tr');
  rowCar.dataset.id = dataCars.id;
  rowCar.classList.add('rowCar');

  infoCar.map(info => {
    rowCar.appendChild(createColumnCar(info.type, info.value));
  });

  const tdBtnDeleteCar = document.createElement('td');
  tdBtnDeleteCar.classList.add('center');
  tdBtnDeleteCar.appendChild(btnDeleteCar);

  rowCar.appendChild(tdBtnDeleteCar);

  tbodyCars.appendChild(rowCar);

  // Verifica se existe alguma linha vazia
  const rowCarEmpty = document.querySelector(`tr[data-id="empty"]`);

  // Se existir, exclui a linha vazia existente
  if (rowCarEmpty !== null) {
    tbodyCars.removeChild(rowCarEmpty);
  }
}

async function removeRowCar(e) {
  const btnDelRowCar = e.target;
  const id = e.target.dataset.id;
  const rowCar = document.querySelector(`tr[data-id="${id}"]`);

  try {
    const result = await del(url, { id });

    if (result.error) {
      //console.log('erro ao deletar', result.message);
      alertMessage(result.message);
      return;
    }

    tbodyCars.removeChild(rowCar);

    btnDelRowCar.removeEventListener('click', removeRowCar);

    // Verifica se existe ainda alguma linha com carro inserido
    const verifyRowCar = document.querySelector('.rowCar');

    // Se não existir, exibe a linha de espaço vazio
    if (verifyRowCar === null) {
      createRowCarEmpty();
    }

    alertMessage('Veículo removido com sucesso!');
  } catch (e) {
    alertMessage('Algo deu errado ao tentar excluir o veículo!');
  }
}

function createRowCarEmpty() {
  const rowCarEmpty = document.createElement('tr');
  rowCarEmpty.dataset.id = 'empty';

  const colCarEmpty = document.createElement('td');
  colCarEmpty.colSpan = 8;
  colCarEmpty.innerHTML = `Nenhum carro encontrado!`;
  colCarEmpty.classList.add('center');
  colCarEmpty.classList.add('deeppink-text');
  colCarEmpty.classList.add('strong');

  rowCarEmpty.appendChild(colCarEmpty);
  tbodyCars.appendChild(rowCarEmpty);
}

function createButtonDeleteCar(id) {
  const btnDeleteCar = document.createElement('button');

  btnDeleteCar.classList.add('btnDeleteCar');
  btnDeleteCar.classList.add('btn');
  btnDeleteCar.classList.add('btn-x');
  btnDeleteCar.classList.add('deeppink');
  btnDeleteCar.dataset.id = id;
  btnDeleteCar.innerHTML = `<i class="far fa-trash-alt far-sm" data-id="${id}">`;

  btnDeleteCar.addEventListener('click', removeRowCar);

  return btnDeleteCar;
}

function createBoxColorCar(color) {
  return `<span style="background-color: ${color}" class="box-color"></span>`;
}

function createImageCar(url, brand, model) {
  return `<img class="img-car" src="${url}" alt="${brand} - ${model}" title="${brand} - ${model}"/>`;
}

function createColumnCar(type, value) {
  const td = document.createElement('td');
  td.classList.add('center');

  switch (type) {
    case 'image':
      td.innerHTML = createImageCar(value.src, value.brand, value.model);
      break;
    case 'color':
      td.innerHTML = createBoxColorCar(value);
      break;
    default:
      td.innerHTML = value;
  }

  return td;
}

function alertMessage(msg) {
  const alertContainer = document.querySelector('.alert');

  alertContainer.style.animation = 'bounce 1s linear';
  alertContainer.classList.remove('hide');
  alertContainer.classList.remove('hidden');
  alertContainer.innerHTML = `<p>${msg}</p>`;

  setTimeout(() => {
    alertContainer.classList.add('hidden');
  }, 3000);
}

async function main() {
  const result = await get(url);

  if (result.error) {
    console.log('Erro ao buscar carros', result.message);
    return;
  }

  if (result.length === 0) {
    createRowCarEmpty();
    return;
  }

  result.forEach(createRowCar);
}

main();
