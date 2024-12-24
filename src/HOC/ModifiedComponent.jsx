
const ModifiedComponent = (Component) => {

    return function Another(props){

        return (
            <div className='text-red-600'>
                {props.name}
                <Component {...props}/>
                </div>

        )
    }
 
}

export default ModifiedComponent