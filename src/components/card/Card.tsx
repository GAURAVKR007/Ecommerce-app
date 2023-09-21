import React from "react";
import { CCard,CCardImage,CCardTitle,CCardBody,CCardText,CButton } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
function Card() {
  return (
    <div style={{display : "inline"}}>
      <CCard style={{ width: "18rem",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <CCardImage orientation="top" src="/img/logo.png" />
        <CCardBody>
          <CCardTitle className="" style={{textAlign: "center"}}>Card title</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CCardText>
          <div className="flex justify-around" style={{alignContent: "center"}}>
          <CCardText style={{display: "inline-block", color: "white",padding: "3px 17px",margin: '0',fontWeight: "bold",fontSize: "25px",borderRadius: "40px",background: "#0CA7E4"}}>$900</CCardText>
          <CButton href="#">Buy Now</CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Card;
