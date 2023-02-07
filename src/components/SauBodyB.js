import React from "react";

const SauBodyB = (props) =>{
    //destructuring
    const {name,age,gpa,address,subject,sauimg} = props
    const showsubject = subject.map( (value)=>{return (<>{value}&nbsp;</> )})

    return(
        <>
        <hr/>
        <img src={sauimg} height="100" />
        <br/>
        ชื่อ {name} อายุ {age} เกรดเฉลี่ย {gpa}
        <br/>
        ที่อยู่ บ้านเลขที่ {address.homeno}&nbsp;
        จังหวัด {address.province}&nbsp;
        รหัสไปรษณีย์ {address.postcode}&nbsp;
        <br/>
        วิชาที่ชอบ {showsubject}
        </>
    )
}

export default SauBodyB