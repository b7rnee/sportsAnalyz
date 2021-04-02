import React, { useEffect, useState } from 'react';

const ShotChart = (props) => {
    const [sourceImage, setSrcImage] = useState("");
    useEffect(() => {
        setSrcImage(props.srcImage)
    }, [props]);
    return (
        <div style={{ width: '100%' }}>
            {
                sourceImage
                    ? <div className="flex-container">
                        <div>
                            <img style={{ marginTop: 15 }} src={sourceImage} />
                        </div>
                        <div className="shot-chart">
                            <span>
                                Амжилтгүй шидэлт
                            </span >
                            <div id="orangeBox">
                                <span id="x">X</span>
                            </div>
                            <span>
                                Амжилттай шидэлт
                            </span>
                            <div style={{ borderRadius: 25, width: 25, height: 25, backgroundColor: '#25d56f' }}></div>
                        </div>
                    </div>
                    : <span style={{ display: 'block', textAlign: 'center', fontSize: 14 }}>Chart Section</span>
            }
        </div>
    )
}

export default ShotChart;
