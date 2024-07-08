
export async function handleAsync(url){

    let options = {
        method:"GET",
        headers:{
            'Content-Type':'application/json',
        }
    };

    try{
        let response = await fetch(url,options);
        let result = await response.json();
        return result;
    }
    catch(err){
        console.log("Something went Wrong:",err);
        return err;
    }

}