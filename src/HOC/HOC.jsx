import ModifiedComponent from "./ModifiedComponent"
import OriginalCompoent from "./OriginalCompoent"

const HOC = () => {
    let Modified=ModifiedComponent(OriginalCompoent)
  return (
    <div>
        <Modified name="kirti"/>
    </div>
  )
}

export default HOC