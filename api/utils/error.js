export const errorHandler = (statusCode,message)=>{
    
    // Error is the javascript error constructor to create an error
    const error = new Error(message);
    error.statusCode=statusCode;
    
    return error;
}