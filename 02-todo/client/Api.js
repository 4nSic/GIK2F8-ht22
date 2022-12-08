class Api{
    url='';

    constructor(url){
        this.url = url;
    }

    create(data){
        const JSONdata = JSON.stringify(data);
        const request = new Request(this.url,{
            method: 'POST',
            body: JSONdata,
            headers:{'content-type': 'application/json'}
        });

        return fetch(request).then((result) => result.json()).then((data) => data).catch((err) => console.log(err));
    }

    getAll(){

    }

    remove(){

    }

}