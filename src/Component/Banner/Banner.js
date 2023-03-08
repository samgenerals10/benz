import React from 'react'
import "./Banner.css"
import {Button} from "react-bootstrap"

export default function Banner() {
    return (
        <div>
            <video className="content" width="850px" muted height="700px" loop autoPlay={true} playInline controls>
                <source src={require('../video/banner.mp4')} type="video/mp4" />
                
            </video>
            <div className="bannerText">
                <h3 className="text-center ">
                Mercedes-Benz and Avatar. <br/>
                    EQU SUV
                </h3>
                <br/>
                 <Button className="Discover" variant="danger" size='sm'>Discover More</Button>
            </div>
            
        </div>
    )
}
