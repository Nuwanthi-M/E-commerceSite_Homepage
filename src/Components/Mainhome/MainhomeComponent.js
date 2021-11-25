import React from "react";
import bell from '../images/bell.png';
import "./Mainhome.css";
function MainhomeComponent1(props,style){

    return(
        <React.Fragment>
            <h1 className='py-3 home-heading'>
                <strong><span style={{color: props.color1}}>{props.frist1}</span><span style={{color: props.color2}}>{props.frist2}</span></strong>
                    <br/>
                <strong><span style={{color: props.color2}}>{props.second1}</span><span style={{color: props.color1}}>{props.second2}</span></strong>
                    <br/>
                <strong>{props.third}</strong>
                <strong>{props.forth}</strong>
            </h1>

            <p className=' py-4 home-paragraph ' >
                {props.pharagraph}
            </p>

            <div className='py-4'>
                <button className='btn  btn-default home-button'  onClick={props.handleClick}>{props.label}</button>
            </div>
        </React.Fragment>
        );
}
function MainhomeComponent2(props){
    return(
        <React.Fragment>
            <div className='text-center'>
                <div className='text-center py-4'>
                    <button className='btn category-button' >
                        <img src={bell} alt='bell icon' className=" bell-icon"/><span>{props.categoryname}</span>
                    </button> 
                </div>

                <div className="wrapper">
                    <img className="play" src={props.cat1}  alt='item1'  style={{top:'5%'}} />
                    <img className="play" src={props.cat2}  alt='item2' style={{top:'37%'}} />
                    <img className="play" src={props.cat3}  alt='item3' style={{top:'68%'}} />
                    <img src={props.cat} alt='mainitem' className='mainimage'/>
                </div>
                <br/><br/>
            </div>
        </React.Fragment>
        );
}
export {MainhomeComponent1,MainhomeComponent2};
/**const styles = {
       

      homeheading : {
        fontSize: '55px',
        marginTop : '80px',
        "@media (maxWidth: 1199.98px)":{
          fontSize: '47px',
          marginTop: '40px'
        },
        "@media (maxWidth: 991.98px) ":{
          fontSize: '36px',
          marginTop: '30px'
        },
        "@media (maxWidth: 767.98px)":{
          fontSize: '45px',
          textAlign: 'center',
          marginTop: '60px'
        }
        
       },
      homeparagraph: {
        fontsize: '20px',
        "@media (maxWidth: 1199.98px)":{
          fontSize: '18px'
        },
        "@media (maxWidth: 991.98px) ":{
          fontSize: '18px'
        },
        "@media (maxWidth: 767.98px)":{
          fontSize: '18px',
          textAlign: 'center'
        }

      },
      homebutton: {width: '200px',height:' 50px',borderColor: "#32303a",backgroundColor: "#32303a",color: "#f8b742",bordeRadius: "5px",
        hover: {color:"#141414",backgroundColor: "#b4b1af",borderColor: "#b4b1af", },
        "@media (maxWidth: 1199.98px)":{
          width: '160px',
          height: '45px'
        },
        "@media (maxWidth: 991.98px) ":{
          width: '140px',
          height: '40px',
          fontSize: '16px'
        },
        "@media (maxWidth: 767.98px)":{
          width: '100%',
          height: '50px'
        }
      
      
      },
      homeimage :{maxWidth: "630px",height :'auto',marginTop : '40px',marginBottom :'100px',
      "@media (maxWidth: 1199.98px)":{
        width: '520px',
        marginTop: '30px',
        marginBottom: '50px'
      },
      "@media (maxWidth: 991.98px) ":{
        maxWidth: '400px'
      },
      "@media (maxWidth: 767.98px)":{
        maxWidth: '530px',
        marginTop: '30px',
        marginBottom: '50px'
      }
    
    
    
    },
      subimage: {width: '580px',height: 'auto',marginTop: '100px',marginBottom: '30px',
      "@media (maxWidth: '1399.98px')":{
        width: '520px',
        marginTop: '40px',
        marginBottom: '80px'
      },
      "@media (maxWidth: 1199.98px)":{
        width: '450px',
        marginTop: '40px',
        marginBottom: '50px'
      },
      "@media (maxWidth: 991.98px) ":{
        width: '350px',
        marginTop: '110px',
        marginBottom: '30px'
      },
      "@media (maxWidth: 767.98px)":{
        width: '510px',
        marginTop: '0px',
        marginBottom: '0px'
      }
    },
      processlogo: {width: '50px',height: 'auto',borderradius: '100%',border: '5px solid rgb(230, 58, 6)',
      "@media (maxWidth: 1199.98px)":{
        width: '40px',
        height:'auto',
        borderRadius: '100%',
        border: '5px solid rgb(230, 58, 6)'
      },
      "@media (maxWidth: 991.98px) ":{
        width: '30px'
      },
      "@media (maxWidth: 767.98px)":{
        width: '50px'
      }
    
    },
      process :{fontSize: '20px',fontWeight: '400px',
      "@media (maxWidth: 1199.98px)":{
        fontSize: '18px',
      },
      "@media (maxWidth: 991.98px) ":{
        fontSize: '16px'
      },
      "@media (maxWidth: 767.98px)":{
        fontSize: '18px'
      }
    
    },
      wrapper :{position: 'relative'},
      mainimage :{
        width: "320px",
        height: "420px",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.56) 7px 7px 7px 7px",
        "@media (maxWidth: '1399.98px')":{
          width: '270px',
          height: '370px'
        },
        "@media (maxWidth: 1199.98px)":{
          width: '240px',
          height: '340px',
          boxShadow:' rgba(0, 0, 0, 0.56) 3px 3px 3px 3px'
        },
        "@media (maxWidth: 991.98px) ":{
          width: '180px',
          height: '280px',
          boxShadow: 'rgba(0, 0, 0, 0.56) 2px 2px 2px 2px'
        },
        "@media (maxWidth: 767.98px)":{
          width: '330px',
          height: '430px'
        }
      
      },

      play1: {position: 'absolute',width:'200px',height :'105px',left: '50%',borderRadius : '15px',top:'5%',
      "@media (maxWidth: '1399.98px')":{
        width:'175px',
        height: '105px'
      },
      "@media (maxWidth: 1199.98px)":{
        width: '140px',
        height: '80px'
      },
      "@media (maxWidth: 991.98px) ":{
        width: '105px',
        height: '63px'
      },
      "@media (maxWidth: 767.98px)":{
        width: '205px',
        height: '107px'
      }
      
    },

    play2: {position: 'absolute',width:'200px',height :'105px',left: '50%',borderRadius : '15px',top:'37%',
    "@media (maxWidth: '1399.98px')":{
      width:'175px',
      height: '105px'
    },
    "@media (maxWidth: 1199.98px)":{
      width: '140px',
      height: '80px'
    },
    "@media (maxWidth: 991.98px) ":{
      width: '105px',
      height: '63px'
    },
    "@media (maxWidth: 767.98px)":{
      width: '205px',
      height: '107px'
    }
    
  },
  play3: {position: 'absolute',width:'200px',height :'105px',left: '50%',borderRadius : '15px',top:'68%',
  "@media (maxWidth: '1399.98px')":{
    width:'175px',
    height: '105px'
  },
  "@media (maxWidth: 1199.98px)":{
    width: '140px',
    height: '80px'
  },
  "@media (maxWidth: 991.98px) ":{
    width: '105px',
    height: '63px'
  },
  "@media (maxWidth: 767.98px)":{
    width: '205px',
    height: '107px'
  }
  
},
      categorybutton : {borderRadius : '30px',backgroundColor:"#f6c06a",width: '150px',height: '50px',},
      bellicon: {width: '23px',height: '23px',marginRight: '13px',},


    }*/