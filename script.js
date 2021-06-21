/** 
function gentagelse(array){
    myArray = array;
    ingenGentagelser = [];
    gamle = [];

    for(let i = 0; i < myArray.length; i++){ 
            if (! gamle.includes(myArray[i])){
                ingenGentagelser.push(myArray[i]);
                gamle.push(myArray[i]);
            }

    }
    console.log(ingenGentagelser);
}

gentagelse([1,2,1,3,1,4]);
**/

ingenGentagelser = [];
gamle = [];

class Gen{
    constructor(array){
        this.a = array;
    }

    fjern_gentagelser(){
    
        for(let i = 0; i < this.a.length; i++){ 
                if (! gamle.includes(this.a[i])){
                    ingenGentagelser.push(this.a[i]);
                    gamle.push(this.a[i]);
                }
    
        }
        console.log(ingenGentagelser);
    }
}

test = new Gen([1,2,2,1,3,1,4]);
test.fjern_gentagelser();