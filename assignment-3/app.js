// const searchSelect = document.getElementById("searchSelect").value

// const inputSearch = document.getElementById("inputSearch").value.toLowerCase();

// const searchButton = document.getElementById("searchButton");

// const renderResult = document.getElementById("renderResult");

// const model = document.getElementById("model");
// const brand = document.getElementById("brand");
// const price = document.getElementById("price");
// const camera = document.getElementById("camera");
// const storage = document.getElementById("storage");

const mobileModels = [
  {
    brand: "Samsung",
    model: "SamsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "SamsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "SamsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Vivo",
    model: "VivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "VivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "VivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "Motorola",
    model: "Motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Iphone",
    model: "Iphone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "Iphone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "IphoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

function renderSearchResult(event) {
  event.preventDefault();
  const searchSelect = document.getElementById("searchSelect").value;

  const inputSearch = document
    .getElementById("inputSearch")
    .value.toLowerCase();

  const searchButton = document.getElementById("searchButton");

  const renderResult = document.getElementById("renderResult");

  const filter = mobileModels.filter((x) => {
    let searchValue = x[searchSelect].toString().toLowerCase();
    return searchValue.includes(inputSearch);
  });

  if (filter.length > 0) {
    renderResult.innerHTML = "";
    filter.forEach((x) => {
      renderResult.innerHTML += `
      <li>Brand: ${x.brand}</li>
          <li>Model: ${x.model}</li>
          <li>Price: Rs.${x.price}</li>
          <li>Camera: ${x.camera}</li>
          <li>Ram: ${x.ram} GB</li>
          <li>Rom: ${x.rom} </li>
          <hr>
        `;
    });
  } else {
    renderResult.innerHTML = "No results found.";
  }
}
