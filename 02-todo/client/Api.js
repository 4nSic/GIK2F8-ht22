class Api{
    url='';

    constructor(url){
        this.url = url;
    }

    create(data){
        const JSONdata = JSON.stringify(data);
        console.log(`Sending ${JSONdata} to ${this.url}`)

        const request = new Request(this.url,{
            method: 'POST',
            body: JSONdata,
            headers:{'content-type': 'application/json'}
        });

        fetch(request).then((result) => result.json()).then((data) => console.log("client",data));
    }

    getAll(){

    }

    remove(){

    }

}