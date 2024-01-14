// import { Calendar } from "antd"
import React from 'react';
import { Calendar } from 'antd';
import "../../src/index.css" 
const Mycalender = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <>
        <div className="">
            {/* <Calendar onPanelChange={onPanelChange} />; */}
        </div>
        </>

    )
}

export default Mycalender;