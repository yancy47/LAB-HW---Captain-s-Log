import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    // console.log(props.logs)
    return (
        <DefaultLayout title="Index View">
            <div>
                <h1>Captain's Logs</h1>
                <ul>
                    {props.logs.map((log, index) =>
                        <li key={index}>
                             {/* <strong>{log.title}</strong> */}
                            <a href={`/logs/${log._id}`}><strong>{log.title}</strong></a> 
                            {/* {log._id.toString()} */}
                            </li>
                        )}
                </ul>
                <a href="/logs/new">Add </a>

            <br/><br/><br/>

            <form action="/logs/seed" method="POST">
                    <button>SEED</button>
                </form>

            <form action="/logs/clear?_method=DELETE" method="POST">
                    <button>DELETE LOGS</button>  
            </form>
            
         </div>
         </DefaultLayout>
              
    )}
export default Index

/* 
NOTES
get id from Mongo DB document as a string 
{log._id.toString()}
testing it here 
    <a href={`/logs/${index}`}><strong>{log.title}{log._id.toString()}</strong></a> 

    BUT want to use it in the place of index so and it will not need .toString()
    
    <a href={`/logs/${log._id}`}><strong>{log.title}</strong></a> 
*/
