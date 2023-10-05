import React from "react";
import { CCard,CCardImage,CCardTitle,CCardBody,CCardText,CButton } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
function Card(props:any) {
    const { title , desc , price , img} = props.data;
    

    function handleClick(){
        props.purchase({
          title : title,
          desc : desc,
          price : price,
          img : img
        })
    }
    
  return (
    <div style={{display : "inline"}}>
      <CCard style={{ width: "18rem", background: "#E5E5E5", height: "24rem",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <CCardImage orientation="top" src={img} />
        <CCardBody>
          <CCardTitle className="" style={{textAlign: "center",fontWeight: "bold", fontSize: "23px" , marginTop: "-10px"}}>{title}</CCardTitle>
          <CCardText>
            {desc}
          </CCardText>
          <div className="flex justify-around" style={{alignContent: "center"}}>
          <CCardText style={{display: "inline-block", color: "white",padding: "3px 17px",margin: '0',fontWeight: "bold",fontSize: "25px",borderRadius: "40px",background: "#0CA7E4"}}>${price}</CCardText>
          <CButton onClick={handleClick} style={{fontWeight: "bold"}}>Buy Now</CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Card;
