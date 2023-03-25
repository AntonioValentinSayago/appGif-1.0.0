import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const oninputChage = (event) => {
       
        setInputValue(event.target.value);
    }

/**
 * When the form is submitted, prevent the default action, 
 * check if the input value is empty, if it is,
 * return, if it isn't, set the input value to an empty string,
 *  and call the onNewCategory function
 * with the trimmed input value.
 * @returns The inputValue is being returned.
 */
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