import { useDispatch, useSelector } from 'react-redux';
import './modal.css'
import {CgClose} from "react-icons/cg"
import { modalStatus } from '../store';
import { useEffect, useState } from 'react';
const Modal = (props) => {
    const data = useSelector((state)=>state.task.data)
    const dispatch = useDispatch()
    const rdata = data[props.id-1]
    const handleModalClose=()=>{
        dispatch(modalStatus(false));
    }
    return (
        <div className={`modal-main ${props.id%2==0&&"second"} ${props.id%3==0&&"third"}`}>
            <div onClick={handleModalClose} className="modal-icon"><CgClose className='closeicon'/></div>
            <div className='modal-content'>
                <div className='modal-title'>{rdata?.title}</div>
                <div className='modal-time'>
                    <div className='modal-subHeadings'>Time Left</div>
                    <div><div className='time-remaining'>{rdata?.ctime}</div>
                    <div className='date'>{rdata?.cdate}</div></div>
                </div>
                <div className='modal-description'>
                    <div className='modal-subHeadings'>Additional Description</div>
                    <div className='des'>{rdata?.description}</div>
                </div>
                <div className='created'>
                    <div className='modal-subHeadings'>Created </div>
                    <div className='created-time'>{rdata?.createdAt}</div>
                </div>
                <div ><input className='setDone' type={"range"}/></div>
            </div>
        </div>
    );
}
 
export default Modal;