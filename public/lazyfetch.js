const lazyFetch = (function () {
  async function fetchChuck() {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      return data.value; // Devuelve solo el texto del chiste
    } catch (error) {
      console.error("Error en fetchChuck:", error);
      return null;
    }
  }

  return {
    fetchChuck
  };
})();
