import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [data,setData] = useState({
    title: "",
    desc: ""

  })
  const {id} = useParams();
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3333/users/" + id)
    .then((res) => {
      setData({title:res.data.title,desc:res.data.desc})
    })
    .catch((err) => {
      console.log("Error fetching user data", err)
    })
}, [id])



function handleUpdate(e){
  e.preventDefault()

  axios.put("http://localhost:3333/users/" + id,data)
  .then((res)=>{
    console.log(res)
    navigate("/")
  }).catch((err)=>console.log(err))
}

  

  return (
    <div className="w-[100%] h-screen flex justify-center items-center bg-gray-50">


      <div className=" w-[70%] p-6 rounded-xl shadow bg-violet-400">
        <form action="" onSubmit={handleUpdate} >
          <div className="w-[100%] flex justify-between items-center mb-6 text-white">
            <div className="flex  items-center font-bold text-2xl">
             Update Note
            </div>
            <div className="flex  items-center">
              <button type="submit" className="border-black p-1 rounded bg-blue-700 hover:bg-blue-300  " > Update</button>
            </div>
          </div>
          <div className="w-[100%] flex flex-col rounded shadow">

            <input
              value={data.title}
              onChange={(e)=>setData({...data,title:e.target.value})}
              name="title"
              placeholder="Title"
              className="w-[100%] border-b-2 px-2 py-1 outline-none rounded-t-sm"
            />

            <textarea
              className="W-[100%] resize-none px-2 outline-none rounded-b-sm"
              value={data.desc}
              onChange={(e)=>setData({...data,desc:e.target.value})}

              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder="Description"
            ></textarea>

          </div>
        </form>
      </div>
    </div>
  );

}

export default Update
