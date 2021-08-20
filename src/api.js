import axios from "axios";

const geoLocationUrl = "https://api.geoapify.com/v1";
const newsApiUrl = "https://newsapi.org/v2";

async function getUserLocation() {
    const response = await axios.get(
        `${geoLocationUrl}/ipinfo?apiKey=85302f6ee6624ef4a89356d355a84d3e`
    );
    return response;
}

async function getTopNewsHealines(country) {
    const response = await axios.get(
        `${newsApiUrl}/top-headlines?country=${country}&apiKey=b23b2e340dab49e58e9a5592bf753dda`
    );
    return response;
}

async function getTopNewsHealinesCategories(country, category) {
    const response = await axios.get(
        `${newsApiUrl}/top-headlines?country=${country}&category=${category}&apiKey=b23b2e340dab49e58e9a5592bf753dda`
    );
    return response;
}

async function searchAllCatgories(search_query) {
    const response = await axios.get(
        `${newsApiUrl}/top-headlines?q=${search_query}&apiKey=b23b2e340dab49e58e9a5592bf753dda`
    );
    return response;
}

async function filterNewsBySource(source) {
    const response = await axios.get(
        `${newsApiUrl}/top-headlines?sources=${source}&apiKey=b23b2e340dab49e58e9a5592bf753dda`
    );
    return response;
}

async function getAllSources() {
    const response = await axios.get(
        `${newsApiUrl}/top-headlines/sources?apiKey=b23b2e340dab49e58e9a5592bf753dda`
    );
    return response;
}

export default {
    getUserLocation,
    getTopNewsHealines,
    getTopNewsHealinesCategories,
    searchAllCatgories,
    filterNewsBySource,
    getAllSources,
};