export function useFecth() {
  const getData = async (search = '') => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL_API}/search?q=${search}`
      );
      const data = await response.json();
      return data.products;
    } catch (error) {
      return {};
    }
  };

  return {
    getData,
  };
}
