import instance from "./AxiosInstance";

const App = () => {
  async function apiCallUsingAxios() {
    let data=await instance({ method: "GET",timeout:1000 });
    console.log(data)
  }
  apiCallUsingAxios()
  return <div></div>;
};

export default App;
