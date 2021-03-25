import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Button, Divider, Drawer, List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
const ShotChart = (props) => {

    const [players, setPlayers] = useState(props.players);
    const [sourceImage, setSrcImage] = useState("");
    const [info, setInfo] = useState([])
    const [isDrawer, setIsDrawer] = useState(false);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setPlayers(props.players)
        setSrcImage(props.srcImage)
    }, [props]);


    const shotChartDraw = (full_name) => {
        setLoading(true)
        axios.get(`/shotChartDetail/${full_name}`).then((res) => {
            let test = res.data.url;
            let info = JSON.parse(res.data.info)
            setInfo(info)
            setSrcImage(test)
        }).finally(() => setLoading(false))
    }

    return (
        <>
            {loading ? <CircularProgress /> :
                <img style={{ marginTop: 15 }} src={sourceImage}></img>}
            <div>
                {info.length > 0 && info?.map((el) => {
                    return <span style={{ color: "yellow" }}>{el}</span>
                })}
            </div>
        </>
    )
}

export default ShotChart;
