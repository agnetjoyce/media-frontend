import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {
  
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  const[allVideos,setAllVideos]=useState([])

  const getAllVideos = async()=>{
    const result = await getAllVideoAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }else{
      console.log("api failed");
      setAllVideos([])
    }
  }

  console.log(allVideos);


  useEffect(()=>{
    getAllVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse])

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDropped =async(e)=>{
    const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    const {data}=await getCategoryAPI()
    const selectedCategory = data.find(item=>item.id==categoryId)
    let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
    console.log(result);
    let {id,categoryName} = selectedCategory
    let newCategory = {id,categoryName,allVideos:result}
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res)
  }
  
  return (
    <>
    
    <h3 className='m-3'>All Videos</h3>

      <Row droppale="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}className="gx-3 gy-4 px-5">
        {
         allVideos?.length>0?allVideos.map((video,index)=>(
          <Col key={index} sm={12} md={6} lg={3}>
          <VideoCard video={video}setDeleteVideoResponse={setDeleteVideoResponse}/>
          </Col>
         )):<p className='text-danger'>Nothing to display</p>
        }
       
      </Row>
    </>
  )
}

export default View
