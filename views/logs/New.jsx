import React from "react";

function New(props){ // props passed is logs
    return(
        <div>
            <h1>New View Log</h1>
            <form action="/logs" method ='POST'>
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="ent">Entry:</label><br />
                <input type="textarea" id="ent" name="entry" /><br /><br />

                <label htmlFor="shp">Ship Is Broken:</label>
                <input type="checkbox" id="shp" name="shipIsBroken" /><br /><br />

                {/* <label htmlFor="sub">Submit</label><br /> */}
                <input type="submit" id="sub" name="submit" /><br /><br />
            
                {/* <button>Submit</button> */}
            </form>
        </div>
        
    )
}

export default New;