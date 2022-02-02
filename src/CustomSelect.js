import React from 'react'
import Select from 'react-select'


const options = [
    { value: 'react', label: 'React' },
    { value: 'react-native', label: 'React Native' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'node', label: 'Node' },
  ]

  function onChangeInput(value){
    console.log(value);
  }

const CustomSelect = ({style}) => {
    return (
        <div style={style}>
             <Select isMulti={true} onChange={onChangeInput} options={options} defaultValue={[options[2], options[1]]}/>
        </div>
    );
};

export default CustomSelect;