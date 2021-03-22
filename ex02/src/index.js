function checkVariableScope(){
    'use strict';

    let i;
    let i = 'function variable';
    checkVariableScope();
}

    if(ture){
         
       let i ='block varibale';
    return i;
    
    console.log('Scope i is ', i);
    
    }

module.exports = checkVariableScope;