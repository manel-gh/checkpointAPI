import React from 'react'
import './NotFound.css'
import LocalBarIcon from '@material-ui/icons/LocalBar';

function DrinkNotFound() {
    return (
        <div className='drink'>
            <div className='icon'>
                <LocalBarIcon style={{ fontSize: '50%', color: "orange" }} />
            </div>
            <div className='notfound'>Drink Not Found</div>
        </div>
    )
}

export default DrinkNotFound