import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Navigate } from "react-router-dom";

function Add() {

  const [data, setData] = useState({
    title: "",
    desc: ""
  })

  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // console.log(data)
    try {
      if (!data.title) {
        alert("title is required")
      }
      // else if (!data.desc) {
      //   alert("description is required")
      // }
      else {

        await axios.post(`http://localhost:3333/users`, data)
        alert("new notes added")
        
        setData({ title: "", desc: "" })
        setTimeout(()=>{
          Navigate('/card')
        },2000)
      }
    }
    catch {
      console.log("error")
    }
  }
 

  return (
    <div className="w-full h-screen flex  flex-row ">

      <div className="w-[100%] m-5 p-7 border-2 flex  gap-5 rounded-xl bg-violet-100">

        <div className="w-[30%] h-full flex flex-col ">

          <div className="w-[100%] p-2 mb-4 text-center bg-violet-600 text-3xl font-bold text-white rounded-md">
           Notebook
          </div>

          <div className="w-[100%]  flex overflow-auto ">
            <div className="w-[95%]  flex flex-col gap-3 ">
    

          <Card/>

            </div>
          </div>
        </div>

        <div className=" w-[70%] p-6 rounded-xl shadow bg-violet-400">
          <form action="" onSubmit={handleSubmit}>
            <div className="w-[100%] flex justify-between items-center mb-6 text-white">
              <div className="flex  items-center font-bold text-2xl">
                Add List
              </div>
              <div className="flex  items-center">
                <button type="submit" className="border-black p-1 rounded bg-blue-700 hover:bg-blue-300  " >  Save note</button>
              </div>
            </div>
            <div className="w-[100%] flex flex-col rounded shadow">

              <input
                value={data.title}
                // onChange={(e) => setTitle(e.target.value)}
                onChange={handleInput}
                name="title"
                placeholder="Title"
                className="w-[100%] border-b-2 px-2 py-1 outline-none rounded-t-sm"
              />

              <textarea
                className="W-[100%] resize-none px-2 outline-none rounded-b-sm"
                value={data.desc}
                // onChange={(e) => setDesc(e.target.value)}
                onChange={handleInput}
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
    </div>
  );
}

export default Add;
