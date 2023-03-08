import React from "react"
import "../../src/styles.css"
import imagefirst from "../../src/images_benz/imagesfirst.png"
import './header1.css'





export default function HeaderOne() {
  return (
    <>
      <div>
        <nav className="NavBarFirst FixedTop">
          <ul className="HeaderUnorderedListFirst">
            <li>Deutsch</li>
            <li>|</li>
            <li>English</li>
            <li>Provider/Privacy</li>

          </ul>

          <div className='imageFirst'>
            <img className="imageFirstStyle my-auto" src={imagefirst} /> 
            
          </div>
        </nav>

      </div>
    </>
  )
}