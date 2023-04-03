import React from "react";

import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
    return(
        <DefaultLayout title="Show View">
        <div>
            <h1>Log Details</h1>

            <p><strong>{props.log.title}</strong></p>
            <p>Entry: {props.log.entry}</p>
            <p>The ship {props.log.shipIsBroken ? 'is broken': 'is NOT boken'}</p>
            {/* <ul> 
                <li>Date: {props.log.date}</li>
            </ul> */}

            <a href={`/logs/${props.log._id}/edit`}>Edit</a>
            <br /><br />

            <form action={`/logs/${props.log.id}?_method=DELETE`} method="POST">
                    <button>DELETE</button> 
                    <br /> 
                    <br /> 

            </form>


            <a href= '/logs'> Back </a>

    
            
    </div>
    </DefaultLayout>
    )
}
export default Show;

/*
NOTES
<form action=""  the action indicates where we want to send the request data to in this case delete route 
delete route is /logs/:id 
use a template literal that makes this javascript, also already have id so just use id 
<form action={`/logs/${props.log.id}`} 
setup delete form to have the appropriate action and method

*/