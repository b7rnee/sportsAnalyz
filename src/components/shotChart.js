import React, { useEffect, useState } from 'react';
const ShotChart = (props) => {
    const [sourceImage, setSrcImage] = useState("");
    useEffect(() => {
        setSrcImage(props.srcImage)
    }, [props]);
    return (
        <div>
            {
            sourceImage
            ? <div style={{flexDirection:"column"}}>
                <div>
                <img style={{ marginTop: 15 }} src={sourceImage}/>
                </div>
                <div>
                    
                <span>   
                    missed shot
                </span>
                <div style={{width:50,height:25, backgroundColor:'#5A7A7F'}}></div>
                <span>
                    made shot
                </span>
                <div style={{width:50,height:25,backgroundColor:'#25d56f'}}></div>
                </div>
               </div>
            : <span>Chart Section</span>
            }
        </div>
    )
}

export default ShotChart;
