import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e026ec0f-7833-4039-8390-70ab672c69d9"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`)},

        getProfile(userId) {
            return instance.get(`profile/`+userId)
        }
   

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`) 
    }
   
}
    


