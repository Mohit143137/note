import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
// import { NavLink, useParams } from 'react-router-dom';

function View() {

  let [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3333/users/" + id)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log("Error fetching user data", err)
      })
  }, [id])




  return (
    <div className="w-full h-screen flex justify-center items-center bg-violet-200">
      <div className="w-[40%] h-[50%] bg-white flex flex-col gap-6 ">
        <div className='w-[100%] h-12 flex '>
          <div className='w-[40%] '>
            <h1 className=' p-5 text-3xl text-start font-serif '>{data.title}</h1>
          </div>
          <div className="w-[60%]  flex gap-3 p-5 justify-end">
            <NavLink to="/update">
              <button className="bg-green-600 hover:bg-green-300 text-white px-2 py-1 rounded ">
                Update
              </button>
            </NavLink>

            <NavLink to="/">
              <button className="bg-blue-600 hover:bg-blue-300 text-white px-2 py-1 rounded">
                Save
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex gap-6">
          <p className='px-5 font-serif'>{data.desc}</p>
        </div>

      </div>
    </div>
  )
}

export default View