import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"



// addVideo API

export const uploadVideoAPI = async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

// getVideo API

export const getAllVideoAPI = async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

// getAVideo API

export const getAVideoAPI = async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// deleteAVideo API

export const deletVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

// addhistory API

export const addHistoryAPI = async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

// getHistory API

export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// deleteHistory API

export const deletHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

// addcategory API

export const addCategoryAPI = async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

// getcategoryAPI

export const getCategoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

// deletecategory API

export const deletCategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// updatecategory Api

export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}