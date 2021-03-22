import React from 'react';

const AddButton = ({ text, onClick }) => {
    return (
        <div className="d-flex justify-content-center">
            <button 
                type='button'
                onClick={onClick}
                className='btn btn-outline-success col-10'
            > {text} </button>
        </div>
        
    )
}

export default AddButton;