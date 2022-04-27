import { Modal } from "react-vatt-modal/dist/Modal/Modal.js"
import '../../styles/Modal.css'


function SubmitModal({modalIsOpen, stateFunction}) {
    return(
        <Modal style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: 'absolute',
                color: 'red',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                background: '#fff',
                overflow: 'auto',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                margin: "500px 400px",
            }````,
        }} isOpened={modalIsOpen} content={"New employee has been registered"} handleCloseModal={() => stateFunction(false)} buttonContent={"Close"}/>
    )
}


export default SubmitModal