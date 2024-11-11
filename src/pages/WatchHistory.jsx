import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletHistoryAPI, getHistoryAPI } from '../services/allAPI'

function WatchHistory() {

  const[history,setHistory]=useState([])
  useEffect(()=>{
  getHistory()
  },[])
  const getHistory=async()=>{
    const result= await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("api failed");
      setHistory(result.message)
    }
  }
  console.log(history);

  const removeVideoHistory=async(id)=>{
    await deletHistoryAPI(id)
    getHistory()
  }
  
  return (
    <>
      <div className='container mt-5 mb-3 d-flex justify-content-between'>
        <h2>Watch History</h2>
        <Link style={{textDecoration: "none", color: "yellow", fontSize:"30px"}} to={"/home"}>Back To Home <i class="fa-solid fa-backward"></i></Link>
      </div>
      <div className="container mt-5 mb-3 w-100">
        <table className='table shadow w-100'>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
          {
            history?.length>0?history.map((video,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{video?.caption}</td>
              <td><a href={video?.link} target='_blank'></a>{video?.link}</td>
              <td>{video?.timeStamp}</td>
              <td><button className="text-danger btn" onClick={()=>removeVideoHistory(video?.id)}><i class="fa-regular fa-trash-can"></i></button></td>
            </tr>
            )):<p className='text-danger fw-bolder'>Nothing to display</p>
          }
        </table>
      </div>
    </>
  )
}

export default WatchHistory
