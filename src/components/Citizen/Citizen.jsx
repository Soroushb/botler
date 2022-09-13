import React from "react";
import './Citizen.scss';
import { images } from '../../constants'



const Citizen = () => {

    return(
    <>
    <div className="title-container">
    <div className="title-contents">
    <h1>Botler For Citizens</h1>
    <div className="buttons">
        <button id="button1">Request Access</button>
        <button id="button2">Partner with us</button>
    </div>
    </div>
    </div>
    <div className="desc">
        <div id="citizen-1">
        <img src={images.citizen} alt="citizen1" width="300px"/>
        <p className="paragraph">Botler for Citizens is a free citizen-empowering first response system designed to confidentially support individuals who have faced harassment, violence, discrimination and misconduct through appropriate response and action guidance, putting power and control back into their hands.</p>
        </div>
        <div id="citizen-2">
        <img src={images.citizen2} alt="citizen2" width="300px"/>
        <p className="paragraph">Botler’s secure web application confidentially asks users trauma-informed questions to capture comprehensive details of the misconduct they have experienced. Botler then provides the user with a personalized set of resources and action guidance on a per-case basis, including references to the law and referrals to legal services and information.</p>
        </div>
        <div id="citizen-3">
        <img src={images.citizen3} alt="citizen3" width="300px"/>
        <p className="paragraph">Armed with a meaningful understanding of the issue, users are empowered to seek justice and pursue their legal rights. All in strict confidence. Botler for Citizens is funded in part under the Department of Justice Canada’s $50 Million commitment to address sexual harassment in the workplace.</p>
        </div>
    </div>
    </>
    )

}

export default Citizen;