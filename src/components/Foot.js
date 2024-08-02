import React from 'react'

export default function Foot(props) {
    return (
        <div>
            <div className="container-fluid mt-5 mb-3">
                <div className={`text-center text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    Designed and developed by <a className={`text-decoration-none text-${props.mode === 'dark' ? 'info' : 'primary'}`} href="https://github.com/Mitrarnab"><strong>Arnab</strong></a>
                </div>
            </div>
        </div>
    )
}
