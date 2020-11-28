import axios from 'axios';
const api = "AIzaSyBCbcDWev8Fq8iwP9qet-W4-C9_GL24PgA";
axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params:{
        part : 'snippet',
        maxResults:5,
        key:KEY
    }
})