const endpoints = {
  chuck: "https://api.chucknorris.io/jokes/random",
  // agrega más endpoints aquí
};

window.lazyChuck = function () {
  const url = endpoints.chuck;
  return fetch(url).then(res => res.json());
};
