import React, {useState} from 'react';
import './App.css';

export default function App() {
    const [selectOptions, setSelectOptions] = useState([
        {label:'Option 1', value: 1},
        {label:'Option 2', value: 2},
        {label:'Option 3', value: 3}
    ]);
    const [currenSelection, setCurrenSelection] = useState('');
    const [array, setArray] = useState([]);

    return (
        <div>
            
            <select onChange = {(e) => {
                setCurrenSelection(e.target.value);
            }} value= {currenSelection}>
                <option value="">Please select</option>
                {selectOptions.map(o => <option value={o.value}>{o.label}</option>)}
                
            </select>
            <button onClick= {() => {
                if(currenSelection != '') {
                    array.push(currenSelection);
                    setArray([...array]);
                }
            }}>Add</button>
            <div>
                <ul>
                    {array.map(i => <li>{i}</li>)}
                </ul>
            </div>
        </div>
    );
}

