import axios from '@/lib/axios'


export const useApp= () => {   

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    
    const getProducts = async () => {
        await csrf()
        axios
            .get('/api/products')
            .then(response => {
                //console.log(response.data);
              })
            .catch(error => {
                if (error.response.status !== 422) throw error               
            })
    }

    const getCategoryProducts = async () => {
        await csrf()
        axios
            .get('/api/categories')
            .then(response => {
                return  response.data                                              
              })
            .catch(error => {
                if (error.response.status !== 422) throw error               
            })
    }
      
    return {
        getProducts,
        getCategoryProducts    
    }
}
