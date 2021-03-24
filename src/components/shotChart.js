import React,{useEffect,useState} from 'react';
import * as d3 from 'd3';
const ShotChart = () =>{

    const myRef = React.createRef();
    const dataset = [100,213,90,433,500];
    const [players,setPlayers] = useState([])

    useEffect(()=>{
        let size = 500;
   let svg = d3.select(myRef.current)
               .append('svg')
               .attr('width', size)
               .attr('height', size);
   let rect_width = 95;
   svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 5 + i*(rect_width + 5))
      .attr('y', d => size - d)
      .attr('width', rect_width)
      .attr('height', d => d)
      .attr('fill', 'teal');

        fetch('/api').then((res)=>{
            if(res.ok){
               return res.json()
            }
            console.log("Res",res)
        }).then((res)=>{setPlayers(res)}).catch((err)=>{
            console.log("Error",err)
        })
    },[])
    return(
        <>
        <div ref={myRef}><span>Hellsso  D3 React</span></div>
        <div>
            {players?.map((el)=>{
               return(
                <button style={{backgroundColor:'grey',display:'flex'}} onClick={()=>{
                    fetch(`/shotChartDetail/${el.full_name}`).then((res)=>{
                        if(res.ok){
                           return res.json()
                        }
                        console.log("Res",res)
                    })
                }}>
                    <span>
                        {el.full_name}
                    </span>  
                </button>
               

               ) 
            })}
        </div>
        </>
    )
} 

export default ShotChart;
