
import axios from "axios";

const searchApiUrl = `https://www.themealdb.com/api/json/v1/1/search.php`;
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export async function getAllDish() {
    const response = await axios.get(apiUrl);
    return response;
}

export async function getParticularDish(dishName){
   const response = await axios.get(searchApiUrl,{
       params:{
           s:dishName
       }
   });
   return response;

}

