import React from "react";
import './Mhbody.css';
import bell from '../images/bell.png';

function MainhomeComponent1(props,style){
    return(
        <React.Fragment>
            <h1 className='py-5 home-heading'>
                <strong>{props.frist1}</strong><strong style={{color: props.color}}>{props.frist2}
                {props.middle1}</strong>
                <strong>{props.middle2}
                {props.last}
                {props.other}</strong>
            </h1>

                <p className='home-paragraph'>
                    {props.pharagraph}
                </p>

            <div className='py-5'>
                <button className='btn home-button'>{props.buttonname}</button>
            </div>
        </React.Fragment>
        );
}
function MainhomeComponent2(props){
    return(
        <React.Fragment>
            <div className='text-center'>
                <div className='text-center py-4'>
                    <button className='btn category-button'>
                        <img src={bell} alt='bell icon' className='bell-icon'/><span>{props.categoryname}</span>
                    </button> 
                </div>

                <div className="wrapper">
                    <img className="play" src={props.cat1}  alt='item1' style={{top:'5%'}}/>
                    <img className="play" src={props.cat2}  alt='item2'  style={{top:'37%'}}/>
                    <img className="play" src={props.cat3}  alt='item3'  style={{top:'68%'}}/>
                        <img src={props.cat} alt='mainitem' className="mainimage"/>
                </div>
            </div>
        </React.Fragment>
        );
}
export {MainhomeComponent1,MainhomeComponent2};