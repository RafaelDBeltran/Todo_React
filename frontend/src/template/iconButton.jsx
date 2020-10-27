import React from 'react'
import ModuleIf from './moduleIf'
export default props => (
    <ModuleIf test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-'+ props.icon}></i>
        </button>
    </ModuleIf>
    
)