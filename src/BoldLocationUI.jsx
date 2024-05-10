const BoldLocationUI = ({location}) => {
    return (
    <div>
    <h1 className="bg-red-600">latitude:{location.latitude}</h1>
    <h1 className="bg-red-600">longitude:{location.longitude}</h1>
    </div>
    );
    };
    export default BoldLocationUI