import { getAllDish, getParticularDish } from "@/service/dishService";

const state ={
    listData: [],
    contentdetails:[]
   

};
const getters ={
    listData: state => state.listData,
    contentdetails: state => state.contentdetails
};
const actions={
    async getRandomDish({commit}){
        const response =await getAllDish();
        console.log(response.data);
        commit("setDish",response.data);
    },

    async getParticularFood({commit},nameOffood){
        const response  =  await getParticularDish(nameOffood);
        commit("setParicularFood",response.data);
    },
    async getFoodDetails({commit},nameOffood){
        const response  =  await getParticularDish(nameOffood);
       
        commit("getFoodDetails",response.data);
    }
};
const mutations={
    setDish: (state,dish) => (state.listData = dish.meals),
    setParicularFood:(state,dish) =>(state.listData = dish.meals),
    getFoodDetails:(state,dish) =>(state.contentdetails = dish.meals[0])

  
};

export default{
    state,
    getters,
    actions,
    mutations
}
