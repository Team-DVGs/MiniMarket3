



// Thunk patterns
export const fetchingDataFromApi = async (url: string) =>{
    // return async (dispatch){
    //     const fetchHandler = async () => {

    //     }
    // }
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch(err){
        throw new Error();
    }
}



// For storing utils function
export const debounce = <T extends (...args: any[]) => any>(func:T, delay:number =1000) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => { // ..args: rest contains all parameters as an alike array
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            // apply call the function as normally but seperate the args into vars
            func.apply(null, args);
        }, delay);
    }
}