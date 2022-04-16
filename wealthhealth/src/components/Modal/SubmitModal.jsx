import Modal from "react-modal"
import '../../styles/Modal.css'

Modal.setAppElement('#root');

function SubmitModal({modalIsOpen, stateFunction}) {
    return(
        <Modal isOpen={modalIsOpen} style={{overlay: {display: "flex", justifyContent: "center", alignItems: "center"}}} contentElement={() => 
            <div className="modal-container">
                <p className="modal-content">Succesfull registration</p>
                <div className="cross-btn" onClick={() => stateFunction(!modalIsOpen)}>
                    <div className="cross1"></div>
                    <div className="cross2"></div>
                </div>
            </div>} />
    )
}


export default SubmitModal