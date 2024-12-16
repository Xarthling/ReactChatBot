// src\components\Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg z-10 p-5">
                <h2 className="text-lg font-semibold">{title}</h2>
                <div className="mt-4">
                    {children}
                </div>
                <img src="user.png" alt="" />
                <button 
                    className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;