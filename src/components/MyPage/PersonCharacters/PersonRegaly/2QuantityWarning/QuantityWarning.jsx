import React from 'react';
import PersonClass from './QuantityWarning.module.sass'

const QuantityWarning = () => {
    return (
                <div className={PersonClass.self_center}>
                    <div>
                        <strong>15</strong>
                        <br/>
                        <span>Предупредил</span>
                    </div>
                </div>
    )
};

export default QuantityWarning;