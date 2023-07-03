import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import FloatingWhatsApp from "react-floating-whatsapp";
// import * as contactdetail from "./Constants";
// import avt from '../public/logo-t.png';
// import { Button } from "reactstrap";

export default function Whatsappnew() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+919860313171"

        // phoneNumber={contactdetail.contactno}
        accountName="1to1Guru"
        statusMessage="We will reply within short time"
        chatMessage="Welcome to 1to1Guru, We are providing personalized teaching to 8th to 12th students for all subjects & Examinations"
        darkMode="false"
        allowClickAway="true"
        // avatar={avt}
        allowEsc="true"
        notification="true"
        notificationDelay="30000"
      // styles={{zIndex:"10"}}
      // height="1000"
      />
      {/* <div className="alwaysonTop" style={{left:"12px",bottom:"80px"}}>
          <Button
            className="btn-lg btn-icon-only rounded-circle ml-3"
            color="success"
          >
            <span className="btn-inner--icon">
              <i className="fa fa-phone" />
            </span>
          </Button>
        </div> */}
    </div>
  );
}
