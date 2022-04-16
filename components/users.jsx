// import React, { Component }  from "react";

// class Users extends Component{

//     render() {
//         return(
//             <div  className="container">
//                 <h3>Users Page</h3>
//             </div>
//         );
//     }
// }

// export default Users;



import React,{useState, useEffect} from "react";

export default function Users()
{

    const [data, setData] = useState([]);
    const [mode, setMode] = useState('online')
    useEffect(() =>{
        let url = "http://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) =>{
            response.json().then((result) =>{
                console.warn("result",result);
                setData(result);
                localStorage.setItem("users", JSON.stringify(result))
            })
        }).catch(err =>{
            let collect =  localStorage.getItem("users");
            setData(JSON.parse(collect));
            setMode('offline')
            // alert("catch blok")
        })
        
    },[])

    return(
        <div className="container m-3">
            <div className="text-warning">
                {
                    mode==='offline' ?
                    <h5>Some issue with connection</h5>
                    :null
                    
                }
            </div>
            <div className="row bg-primary  text-white">
                <div className="col-1 border">ID</div>
                <div className="col-3 border">Name</div>
                <div className="col-4 border">Email</div>
                <div className="col-4 border">Website</div>
            </div>
            {
                data.map((num)=>(
                    <div className="row">
                        <div className="col-1 border">{num.id}</div>
                        <div className="col-3 border">{num.name}</div>
                        <div className="col-4 border">{num.email}</div>
                        <div className="col-4 border">{num.website}</div>
                    </div>    
                ))
            }

        </div>
    )
}