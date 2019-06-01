module.exports=(error)=>{
    if(error instanceof SyntaxError){
        console.error('Caught as Syntax Error ' +error);
    }
    else if (error instanceof ReferenceError){
        console.info('Caught as ReferenceError ' +error);
    }
    else{
        console.error('Unknown Error',error);
    }
}