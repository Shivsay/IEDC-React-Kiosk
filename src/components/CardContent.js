import React, { useState } from "react";

import CardModal from "./CardModal"

import img1 from '../IEDC_Nest_examle.png';

function CardContent() {
    const [showModal, setShowModal] = useState(false);  //set to false initially NOTE: use setBoolName in react for efficent re-rendering

    const content = "Teamwork and collaboration gives rise to wonderful results. We’re looking for smart, talented and skilled innovators to be a part of the IEDC students’ team, purely led and operated by students themselves! For the very first time we're bringing in a student team for IEDC Kerala. Applications are invited from students to be a part of 𝗜𝗘𝗗𝗖 𝗡𝗘𝗦𝗧 - 𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗼𝗳 𝗘𝗻𝘁𝗿𝗲𝗽𝗿𝗲𝗻𝗲𝘂𝗿𝘀 𝗮𝗻𝗱 𝗦𝘁𝘂𝗱𝗲𝗻𝘁 𝗧𝗲𝗮𝗺  for the year 2022-23. Why wait? Grab this opportunity to be a part of the vibrant startup ecosystem.";

    const toggleModal = () => {
        setShowModal(!showModal);
    };


    return(
        //needed to put empty tag to parent so that both the card and the modal can be viewed at the same time and so that the modal fill's the entire viewport NOTE: ugly?
        <>
            <div className="card" onClick={toggleModal}>
                <h1>IEDC NEST</h1>
                <img src={img1}></img>
                <p>
                    {content}
                </p>

            </div>
                <CardModal isOpen={showModal} onClose={toggleModal} children = {content} />
        </>


    );
}

export default CardContent;
