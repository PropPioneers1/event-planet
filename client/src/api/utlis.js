import axios from "axios"


// Todo: upload image in imageBB 
 export const uploadImage = async(image) => {
    const formData = new FormData()
    formData.append('image',image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=a6848678afc402cfb31f9e16a02ebe5f`, formData);
    return data;
}



