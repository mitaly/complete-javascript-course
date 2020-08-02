import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try{
            const results = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = results.data;
        }catch(error) {
            alert(error);
        }
    }
}