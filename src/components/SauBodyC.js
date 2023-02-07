import React from "react";

function calYear(x){
    return 2565 - x
}

function SauBodyC(props){
    const {teamA,teamB,scoreA,scoreB,eventClick} = props
    const here = "กรุงเทพมหานคร"
    const ps = 2515



    return(
        <>
        ที่นี่ {here} ที่มีอายุยาวนานกว่า ตั้งแต่ปี พ.ศ. {ps} หรือ ค.ศ. {ps-543} รวมแล้วเป็น {calYear(ps)} ปี
        <br/> 
        {teamA} VS {teamB} ผลการแข่งขัน {scoreA} - {scoreB}
        <br/>
        <button onClick={eventClick} >clickme</button>
        <hr/>
        
        </>
    )
}

SauBodyC.defaultProps = {
    teamA: "TeamA",
    teamB: "TeamB",
    scoreA: 0,
    scoreB: 0,
    eventClick: ()=>{alert('SAU 2023')}
} 


export default SauBodyC