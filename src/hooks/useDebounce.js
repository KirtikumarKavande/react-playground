const useDebounce = (cb, delay = 1000) => {
  let id;
  return (...args) => {
    console.log("data>>",args);
    //let id==> if do this here every time i call this function it will clear let id;
    //id=undefined so every time it will clear undefined id.
    clearTimeout(id); // here it made closure with id on line 2 so it will clear
    //id properly and timer will restart again
    id = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};      

export default useDebounce;
