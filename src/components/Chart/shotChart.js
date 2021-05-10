import React, { useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css'
const ShotChart = (props) => {
    const [sourceImage, setSrcImage] = useState("");
    const [hotZoneImage, setHotZone] = useState("");
    const slides = [];
    useEffect(() => {
        setSrcImage(props.srcImage)
        setHotZone(props.srcHotZone)
    }, [props]);
    slides.push(
        <SwiperSlide key={1}>
             {
            sourceImage
                ? <div className="flex-container">
                    <div>
                        <img style={{ marginTop: 15 }} src={sourceImage} />
                    </div>
                    <div className="shot-chart">
                        <span style={{ color: '#0000008A', fontWeight: 'bold' }}>

                            Амжилтгүй шидэлт
                        </span >
                        <div id="orangeBox">
                            <span id="x">X</span>
                        </div>
                        <span style={{ color: '#0000008A', fontWeight: 'bold' }}>
                            Амжилттай шидэлт
                        </span>
                        <div style={{ borderRadius: 25, width: 25, height: 25, backgroundColor: '#25d56f' }}></div>
                    </div>
                </div>
                : <span style={{ display: 'block', textAlign: 'center', fontSize: 14 }}>Chart Section</span>
        }
        </SwiperSlide>
    )
    slides.push(
        <SwiperSlide key={2}>
             {
            hotZoneImage
                ? <div>
                    <div className="flex-container">
                    <div>
                        <img style={{ marginTop: 15 }} src={hotZoneImage} />
                    </div>
                   <div style={{marginTop:50,flexDirection:'row',height:300}}>
                       <div>
                       <img style={{ marginTop: 40,marginLeft:20 }} src={require("../../asssets/images/lowHigh.PNG").default} />
                       </div>
                       <div>
                       <img style={{ marginTop: 25 }} src={require("../../asssets/images/coldHot.PNG").default} />
                       </div>
                   </div>
                </div>
                    </div>
                
                : <span style={{ display: 'block', textAlign: 'center', fontSize: 14 }}>Chart Section</span>
        }
        </SwiperSlide>
    )
    
    return (
        <div style={{ width: '100%' }}>
            <Swiper className="main">
                {slides}
            </Swiper>
           
        </div>
    )
}

export default ShotChart;
