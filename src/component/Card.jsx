// import axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineEdit, AiOutlineDelete ,AiOutlineEye} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function Card() {

  let [data, setData] = useState([]);

  async function getData() {
    let res = await axios.get(`http://localhost:3333/users`);
    let userData = res.data;
    console.log(userData);
    setData(userData);
  }

  useEffect(() => {
    getData();
  }, []);
  
  function handleDelete(id) {
    console.log(id);
    axios.delete(`http://localhost:3333/users/${id}`);
    getData();
    alert("user deleted!!!!");
  }

  return (
    <div className='flex flex-col gap-4'>
    {
      data.map((item,i) =>   
      <div className="w-[100%] h-[120px] flex flex-col gap-2 p-3 justify-between  rounded-md shadow-md bg-white ">
      <h1 className='font-bold text-2xl'>{i+1}.  {item.title}</h1>
      <p className='overflow-auto text-black text-sm'>{item.desc} </p>
      <div className='w-[100%] flex justify-end gap-2'>

        <NavLink to="/">
          <button className="bg-red-600 hover:bg-red text-white p-1 rounded-md " 
          
          onClick={() => {
            if (window.confirm("Are you sure to delete??")) {
              handleDelete(item.id);
            }
          }}>
            
            <AiOutlineDelete size={16} />
          </button>
        </NavLink>
        <NavLink to={ `/update/${item.id}`}>
          <button className="bg-green-600 hover:bg-green-300 text-white p-1 rounded-md">
            <AiOutlineEdit size={16} />
          </button>
        </NavLink>
      
        <NavLink to={`/view/${item.id}`}>
          
          <button className="bg-blue-600 hover:bg-blue-300 text-white p-1 rounded-md">
            <AiOutlineEye/>
          </button>
        </NavLink>
      </div>
      </div>
          // </div>
      )}
      
    </div>

)
}

export default Card
