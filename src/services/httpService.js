import axios from "axios";

export async function Get(url) {
    const response = await axios.get(url, {
        headers: {
            'Accept': 'application/json'
        }
    });
    return response.data;
}