import axios from "axios";

export async function Get(url) {
    /* Adding this proxy, CORS is not allowing to access endpoints */
    const response = await axios.get("https://cors-anywhere.herokuapp.com/" + url, {
        headers: {
            'Accept': 'application/json'
        }
    });
    return response.data;
}