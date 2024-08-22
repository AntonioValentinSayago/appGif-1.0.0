import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const oninputChage = (event) => {
       
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if (inputValue.trim().length <= 1)return;

        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={oninputChage}
            />
        </form>    
    )
}