const useDebounce = (cb, delay = 1000) => {
    let id;

  return (...args) => {

    clearTimeout(id);

    id = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default useDebounce;
