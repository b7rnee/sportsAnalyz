import React, { useEffect, useState,useContext } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import { AuthContext } from '../Login/AuthContext';
import 'swiper/swiper-bundle.css'
import { ACTIONS } from '../../actions';

import {
  
    Button,
 
    Paper,
  
} from '@material-ui/core';

import ReactFileReader from 'react-file-reader'

const ShotChart = (props) => {
    const [sourceImage, setSrcImage] = useState("");
    const [hotZoneImage, setHotZone] = useState("");
    const [fileData, setFileData] = React.useState();
    const { state, dispatch } = useContext(AuthContext);
    const predict = () => {
        dispatch({ type: ACTIONS.BLOCK })
        dispatch({ type: ACTIONS.UNBLOCK })
       
    }
    const base64ToBlob = (base64Data) => {
        const byteString = atob(base64Data);
        const byteNumbers = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(byteNumbers);
      
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([byteNumbers], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
      };
      const getTemplateUrl = () => {
        const url = `/test.xlsx`;
        const base = `UEVSSU9ELEFDVElPTl9UWVBFLFNIT1RfVFlQRSxTSE9UX1pPTkVfQkFTSUMsU0hPVF9aT05FX0FS
        RUEsU0hPVF9aT05FX1JBTkdFLFNIT1RfRElTVEFOQ0UsTE9DX1gsTE9DX1ksU0hPVF9NQURFX0ZM
        QUcsSFRNLFZUTQo=`
        const blob = base64ToBlob(base);
      
        return url;
      };
    const slides = [];
    useEffect(() => {
        setSrcImage(props.srcImage)
        setHotZone(props.srcHotZone)
    }, [props]);
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
                       <Button onClick={() => {
                        setSrcImage("")
                        setHotZone("")
                        setFileData("")
                    }} className="upload-file-btn">
                        Шинэчлэх
                </Button>
                   </div>
        
                </div>
                    </div>
                
                :  <Paper className="paper" style={{ height: 528 }} >
                <Button onClick={() => {
                        getTemplateUrl()
                    }} className="upload-file-btn">
                        Загвар татах
                </Button>
                    <div className="file-info">
                        <span className="file-name">Filename: {fileData?.name}</span>
                    </div>
                    <Button onClick={() => {
                        if(fileData){
                            props.predict(fileData)
                        }
                    }} className="upload-file-btn">
                        Predict
                </Button>
                    <ReactFileReader fileTypes={[".csv", ".xlsx"]} base64={true} handleFiles={(file) => {
                        setFileData(file.fileList[0])
                    }}>
                        <Button className="upload-file-btn">
                            File upload section
                </Button>
                    </ReactFileReader >
                </Paper>
        }
        </SwiperSlide>
    )
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
                        <Button onClick={() => {
                        setSrcImage("")
                        setHotZone("")
                        setFileData("")
                    }} className="upload-file-btn">
                        Шинэчлэх
                </Button>
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
