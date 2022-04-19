import axios from 'axios';
import {getAllDish,getParticularDish} from '../../src/service/dishService';

jest.mock('axios');
describe("services says",()=>{
    

   it("getAllDish  called",async ()=>{
    const mockedResponse = {data:{mealName:"paneer"}};
    axios.get.mockResolvedValue(mockedResponse);
    getAllDish();
    expect(axios.get).toHaveBeenCalled()
   })

   it('getAllDish api called with given url',async()=>{
    const mockedResponse = {data:{mealName:"paneer"}};
    axios.get.mockResolvedValue(mockedResponse);
    getAllDish();
    expect(axios.get).toHaveBeenCalledWith("https://www.themealdb.com/api/json/v1/1/random.php")
   })

   it("check getParticularDish with given url ",async() =>{
    const mockedResponse = {data:{mealName:"paneer"}};
    axios.get.mockResolvedValue(mockedResponse);
    getParticularDish("panneer");
    expect(axios.get).toHaveBeenCalled()    
   })
})


