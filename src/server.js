import axios from 'axios' 



const backendURI = "backend url link here"
const getLocalAccessToken = () => {
    const accessToken = localStorage.getItem('access')
    return accessToken 
}

const getLocalRefreshToken = () => {
    const refreshToken = localStorage.getItem('refresh') 
    return refreshToken 
}



const auth_instance = axios.create({
    baseURL: backendURI,
    headers: {
        'Content-Type': 'application/json',
    }, 
})




auth_instance.interceptors.request.use( (config) => {
    const token = getLocalAccessToken() 
    if(token){
        config.headers['Authorization'] = "Bearer " + token 
    }
    return config 
}, (error) => {
    return Promise.reject(error)
})


let refreshing_token = null 
auth_instance.interceptors.response.use( (response) => {
    return response 
}, async (error) => {
    const originalConfig = error.config 
    if(error.response){
        if(error.response.status == 401 && !originalConfig._retry){
            originalConfig._retry = true 
            try{
                refreshing_token = refreshing_token ? refreshing_token : refreshToken() 
                const rs = await refreshing_token
                if(rs.data.access){
                    const { access } = rs.data 
                    localStorage.setItem('access', access)
                    auth_instance.defaults.headers.common['Authorization'] = "Bearer " + access 
                }
               
                return auth_instance(originalConfig) 
            }catch(_error){
                if(_error.response && _error.response.data){
                    return Promise.reject(_error.response.data)
                }
                return Promise.reject(_error)
            }
        }

        if(error.response.status == 403 && error.response.data){
            return Promise.reject(error.response.data) 
        }
    }

    return Promise.reject(error)


})

const refreshToken = async () => {
    return await auth_instance.post('link to token', {
        refresh: getLocalRefreshToken(), 
    })
}




