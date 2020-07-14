import React from 'react'
import {Link} from 'react-router-dom'

function Home() {

    const shoes = {
        "air-jordan-3-valor-blue": {
          "name": "VALOUR BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
          "name": "JORDAN MARS 270 LONDON",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
          "name": "RACER BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-3-valor-blue1": {
          "name": "VALOUR BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london2": {
          "name": "JORDAN MARS 270 LONDON",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue3": {
          "name": "RACER BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
      }

    return (
        <div className="container">
            {
                Object.entries(shoes).map(([title,{name,img}]) => (
                        <div key={title} className="sub-div">
                            <h3>{title}</h3>
                            <Link to={`/product/${title}`}><img src={img} width="300" height="300" alt={name}/><br /></Link>
                            <strong>{name}</strong>
                        </div>
                ))
            }
        </div>
    )
}

export default Home