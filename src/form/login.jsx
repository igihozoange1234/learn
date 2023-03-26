import React,{useState} from "react"
    const Form = () => {
        const[username,setUsername]=useState('')
        const[password,setPassword]=useState('')
        const[loading,setLoading]=useState(false)

        const handleLogin=(event)=>{
            event.preventDefault()
            setLoading(true)
            console.log({username,password})
            //timeout
            setTimeout(()=>{
                setLoading(false)

            },2000)            

        }
        return (

            <>
         <div className="grid md:grid-cols-2">
         <div>
         <img className="w-full h-screen hidden md:block" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80"/>
         
         </div>
         <div>
         <form onSubmit={handleLogin} className="p-8 max-w-lg mx-auto">
            
            <p className="text-4xl font-bold  text-center py-24">
                Welcome to login form</p> 
                <label>Username</label> 
                <input  value={username} onChange={(event)=>setUsername(event.target.value)} type="text" className="p-3 rounded-lg border-2 border-green-700 focus:outline-none w-full mb-4"/>

                <label>Password</label> 
                <input value={password} onChange={(event)=>setPassword(event.target.value)}type="password" className="p-3 rounded-lg border-2 border-green-700 focus:outline-none w-full mb-4"/>

                <p>Don't you have an account?<a href=""><span className="text-green-600"> Signup Now</span></a></p>
                 
                 {!loading&&<button type="submit" className="bg-green-800 px-4 py-2 rounded w-full my-2 ">Sign in</button> 
                 }{loading&& <p>loading..</p>}
                  
                 </form>
         </div>
         </div>
       </>
        )
    }
    export default Form;