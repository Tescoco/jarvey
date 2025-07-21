import React from 'react'

import ModalSlider from './ModalSlider'

export default function GuidanceModal({onClick}) {
    return (
        <div className='guid-modal'>
            <ModalSlider onClick={onClick} />
        </div>
    )
}
