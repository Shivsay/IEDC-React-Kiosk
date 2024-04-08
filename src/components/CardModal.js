import React from "react";


//The css is in the index.css file. Might want to change that

const CardModal = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;    //if not open don't show anything

    return (
        <div className="modal">
            <div className="modal-content"> 
                <span className="close-button" onClick={onClose}>&times;</span>
                <div></div>

                {children}
            </div>
        </div>
    );
};


export default CardModal;
