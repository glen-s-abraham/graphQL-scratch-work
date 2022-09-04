const GRAPHQL_URL = 'http://localhost:9000';

const fetchGreetings = async()=>{
    const res=await fetch(GRAPHQL_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            query:`
                query{
                    greeting
                }
            `
        })
    });
    const {data} = await res.json();
    return data;
}

const elem = document.getElementById("greeting");
elem.textContent ='Loading....'
fetchGreetings().then(data=>elem.textContent=data.greeting).catch(err=>console.log(err));