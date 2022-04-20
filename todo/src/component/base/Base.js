
import Button from '../button/Button';
import Input from '../input/Input';
import Task from '../task/Task';
import './Base.css';

const Base=()=>(
    <div className="base">
        <div className='tasks'>
        <Input/><Button/>
        </div>
        <Task/>
    </div>
);
export default Base;