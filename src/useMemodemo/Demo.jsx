import React from "react"

const Demo = ({memoizedArray}) => {
    console.log(memoizedArray)
  return (
    <div>Demo</div>
  )
}

export default React.memo(Demo)