import React from "react";

function Edit(props) {
    return(
        <div>
            <h1>Edit Log</h1>
            <form action={`/logs/${props.log._id}?_method=PUT`} method="POST"> 
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" defaultValue={props.log.title} /><br /><br />

                <label htmlFor="ent">Entry:</label><br />
                <input type="textarea" id="ent" name="entry" defaultValue={props.log.entry}/><br /><br />

                <label htmlFor="shp">Ship Is Broken:</label>
                <input type="checkbox" id="shp" name="shipIsBroken" default check={props.log.shipIsBroken}/><br /><br />

                {/* <label htmlFor="sub">Submit</label><br /> */}
                <input type="submit" id="sub" name="submit" /><br /><br />
            
                {/* <button>Submit</button> */}
            </form>        

        </div>
    )
}
export default Edit; 


/*
NOTES 
COPIED the form from New.jsx and then added 
defaultValue={props.log.title}
defaultValue={props.log.entry}
default check={props.log.shipIsBroken}


Edit show the form for editing a particular log and the put request actually changed the data when submit is hit 
just like New and Post relationship 

<form action={`/logs/${props.log._id}?_method=PUT`} method="POST"> 
see Show.jsx line 23 for reference for action and method layout 

*/
