import RenderPattern from "./RenderPattern";



const MouseApp = () => {
    function renderData({x,y}) {
      return (
        <div style={{ height: "100vh" }}>
          <h1>Mouse Position</h1>
          <p>
            X: {x}, Y: {y}
          </p>
        </div>
      );
    }
    return <RenderPattern render={renderData} />;
  };
  export default MouseApp;


  
