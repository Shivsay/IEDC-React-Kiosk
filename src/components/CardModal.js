import React from "react";


const CardModal = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;    //if not open don't show anything

    return (
        <div className="modal">
            <div className="modal-content"> 
                <span className="close-button" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};


export default CardModal;
