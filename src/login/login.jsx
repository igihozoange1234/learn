//react hooks
//normal function
import React,{useState} from "react"
    

export default function Login(){
    const firstname="Uwimpaye"
    const[count,setCount]=useState(0)
    const[hide,setHide]=useState(false)

    return(
         <>
         {!hide &&<div>
         <h2>Welcome to login page</h2>
         <p>{firstname}</p>
         </div>
}
{!hide?<div>
    <h2>Welcome to login page</h2>
         <p>{firstname}</p>
</div>:''
}

<form>
    <input type="text"/>
</form>
         <button>Hide me</button>
         <button onClick={()=>setHide(!hide)} className="w-32 p-3 bg-gray-600">hide me</button>

         <p>{count}</p>
         <button onClick={()=>setCount(count+1)} className="w-32 p-3 bg-gray-600">count me</button>


         </>

    )
        
    }
