
import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import CreateDesForm from '../AddEvent/CreateDesForm';
import OurThemes from '../OurThemes/OurThemes';

const SelectWay = () => {
  return (   
<div className='m-32'>
<Link to='/create-form'><button  className='btn border-3 border'>  start</button></Link>
      <OurThemes></OurThemes>
</div>
     

    
  );
};

export default SelectWay;