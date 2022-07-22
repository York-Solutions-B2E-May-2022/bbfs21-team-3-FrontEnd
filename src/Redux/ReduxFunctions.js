

export function submitUser(obj){
    return async function sideEffect(dispatch, getState){
        try{
            const response = await fetch ("http://localhost:8080/register", {
                methods: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(obj)
            })
        }catch(e){

        }
    }
}

