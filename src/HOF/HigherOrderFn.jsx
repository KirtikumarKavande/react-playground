const HigherOrderFn = (Component) => {
  return function abc(props){
    return(
        <div>
        <Component name={props.name}/>
      </div>
    )
   
  };
};

export default HigherOrderFn;
