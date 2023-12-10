let products = [
  { title: 12, image: "images/shirt.jpg", price: 1200 },
  {
    title: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjq8TZTPFVS1ewyphEM4QQWsQlz-7S12hcyV3_DAow-An1IUhqg_U6tbj8CXxfvJAeTU&usqp=CAU",
    price: 1400,
  },
  {
    title: 16,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgQPWmxZEvg0cvpWgIhJsDmIwi3GUfJ8NWGKKfSeKJQTPn6HmHW9E-Nxy0203FmtlLe8&usqp=CAU",
    price: 1800,
  },
];
const user = products;

let { title, image, price } = user;
const user_list = document.getElementById("container");
for (i = 0; i < products.length; i++) {
  user_list.innerHTML += `<div class="box">
        <img src=${user[i].image} alt="">
    <div class="bottom">
        <p>${user[i].title}</p>
        <h2>Rs ${user[i].price}.00</h2>
        <button onclick="next()">Next</button>
    </div>
    </div>`;
}
