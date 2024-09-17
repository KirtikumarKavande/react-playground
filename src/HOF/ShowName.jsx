import HigherOrderFn from './HigherOrderFn'

const ShowName = ({name}) => {
  return (
    <div>{name}</div>
  )
}

export default  HigherOrderFn(ShowName) 