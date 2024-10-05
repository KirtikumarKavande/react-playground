import  { useState, useMemo, useCallback } from 'react';
import Demo from './Demo';

const MemoizationDemo = () => {
  const [count, setCount] = useState(0);

  const memoizedArray = useMemo(() => {
    console.log("Creating memoized array");
    return [28, 4, 6, 8, 3];
  }, []);

  const nonMemoizedArray = [28, 4, 6, 8, 3];

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  

  console.log("Component rendered");

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Memoization Demo</h1>
      <p className="mb-2">Count: {count}</p>
      <div className="mb-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={incrementCount}
        >
          Increment Count
        </button>
             </div>
      <div>
        <p className="font-semibold">Memoized Array: {JSON.stringify(memoizedArray)}</p>
        <p className="font-semibold">Non-memoized Array: {JSON.stringify(nonMemoizedArray)}</p>
      </div>
      <Demo memoizedArray={memoizedArray}/>
    </div>
  );
};

export default MemoizationDemo;