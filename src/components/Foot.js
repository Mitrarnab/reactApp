import React from 'react'

export default function Foot(props) {
    return (
        <div className={`bg-${props.mode} mt-5 d-flex align-items-center border-top`} style={{ height: '60px' }}>
            <div className="container-fluid">
                <div className={`text-center text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    Designed and developed by <a className={`text-decoration-none text-${props.mode === 'dark' ? 'info' : 'primary'}`} href="https://github.com/Mitrarnab"><strong>Arnab</strong></a>
                </div>
            </div>
        </div>
    )
}
