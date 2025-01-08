import Modal from './Modal'

const CompoundComponent = () => {
  return (
    <div>
        <Modal>
            <Modal.Title>Lets Get started with Compound Component</Modal.Title>
            <Modal.Body>
                <ul>
                    <li>kirtikumar</li>
                    <li>kirtikumar</li>
                    <li>kirtikumar</li>
                    <li>kirtikumar</li>
                </ul>
            </Modal.Body>
        </Modal>

    </div>
  )
}
export default CompoundComponent

const Modal = ({children}) => {
    return (
        <>{children}</>
    )
}
const Title = ({children}) => {
    return (
        <>{children}</>
    )
}
const Body = ({children}) => {
    return (
        <>{children}</>
    )
}

<Modal>
    <Title>Lets Get started with Compound Component</Title>
    <Body>
        <ul>
            <li>kirtikumar</li>
            <li>kirtikumar</li>
            <li>kirtikumar</li>
            <li>kirtikumar</li>
        </ul>
    </Body>
</Modal>