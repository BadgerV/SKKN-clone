import {useReducer, createContext} from 'react';
import ProductReducer from './ProductReducer';

const INITIAL_STATE = {
    wallpaper : "",
    isFetching : false,
    allProducts : [],
    error : false
}

export const ProductContext = createContext(INITIAL_STATE);

export const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

    return (
        <ProductContext.Provider value = {{wallpaper : state.wallpaper, isFetching: state.isFetching, allProducts:  state.allProducts, error: state.error, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}