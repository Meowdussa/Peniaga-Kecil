import React from 'react'
//import React, { useState } from "react";


const Owner = (props) => {
    //const[menu, setMenu] = useState(null);

    //const handleC

    return (
        
        <form action="" method="POST">
            <div>
            <label/>Shop Name<label/>
            <input name="shopname"/>
            </div>

            <div>
            <label/>Address<label/>
            <input name="address"/><br/>
            </div>

            <div>
            <label/>Menu List<label/><br/>
            <input placeholder="item" name="Menu"/><span/>
            <input placeholder ="price" name="price"/>
            <input type="file" id="file" name="file"/><br/>

            <input placeholder="item" name="Menu"/><span/>
            <input placeholder ="price" name="price"/>
            <input type="file" id="file" name="file"/><br/>

            <input placeholder="item" name="Menu"/><span/>
            <input placeholder ="price" name="price"/>
            <input type="file" id="file" name="file"/><br/>
         
            </div>
            <button>Submit</button>
        </form>
        
    )
}

export default Owner;
