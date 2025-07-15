import {config} from "./libTranslator";

const lazyFetch = (function () {
  
  function extractByPath(obj, path) {
    return path.split(".").reduce((acc, part) => acc?.[part], obj);
  }

  async function generic(key) {
    const entry = config[key];
    if (!entry) throw new Error(`No config for key: ${key}`);

    try {
      const response = await fetch(entry.url);
      const data = await response.json();
      return extractByPath(data, entry.path);
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
      return null;
    }
  }

  async function render(key, selector) {
    const container = document.querySelector(selector);
    if (!container) {
      console.warn(`Selector "${selector}" no encontrado.`);
      return;
    }

    const result = await generic(key);

    if (result) {
      container.innerText = result;
    } else {
      container.innerText = "⚠️ Algo salió mal...";
    }
  }

  return {
    generic,
    render,
  };
})();

window.lazyFetch = lazyFetch;

