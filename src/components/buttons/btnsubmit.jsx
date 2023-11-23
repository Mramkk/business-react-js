import React from 'react'

export default function BtnSubmit(props) {
    return (
        <button disabled={props.disabled} className={props.mclass} type="submit">
            {props.isLoading ? <span className="spinner-border text-light me-2" role="status" style={{ width: "20px", height: "20px" }}></span> : null}
            {props.title}</button>
    )
}
