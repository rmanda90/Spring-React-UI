export const API = {
    
    get() {
        return (fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err)));
    },

    getByID(id){
        console.log(id);
    }
}

