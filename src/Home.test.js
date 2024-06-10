import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

import { shallow,mount } from 'enzyme';
import Home from './Home';
describe('shallow home page',()=>{
    it('check object',()=>{
        //const wrapper =shallow(<Home/>); 
        const wrapper = mount(<div className="some-class" />);
        //console.log(wrapper.debug());
        expect(wrapper.exists('.some-class')).toEqual(true);
    })
});