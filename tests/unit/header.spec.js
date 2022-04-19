import NavMenu from '@/components/NavMenu.vue';
import {shallowMount} from '@vue/test-utils';
describe("header of food app",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(NavMenu,{
        
        })
    });

    it("header renders",()=>{
       expect(wrapper.exists()).toBe(true);
    });    
    it("find dashboard text",()=>{
        expect(wrapper.find("#dash").text()).toBe("Dashboard")
    });

})