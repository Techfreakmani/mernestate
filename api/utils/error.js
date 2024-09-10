export const errorHandler = (statusCode,message)=>{
    
    // Error is the javascript error constructor to create an error
    const error = new Error();
    error.statusCode=statusCode;
    error.message=message;
    return error;
}