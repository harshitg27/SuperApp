import axios from "axios";

const NEWS_API = '71ed88940e94433794d69b3d8f687ecc' ;

export const fetchNewsData = async () => {
    let countryCode = 'IN';
    if (localStorage.getItem("countryCode")) {
        countryCode = localStorage.getItem("countryCode");
        console.log(countryCode, " from localstorage");
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                fetchCountryCode(coords.latitude, coords.longitude).then((output) => {
                    countryCode = output;
                    // console.log(countryCode, " from fetchLocation2");
                });
            });
        }
    }

    const { data, status } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${NEWS_API}`
    );
    if (status == 200) {
        return data.articles[10];
    }
};

const fetchCountryCode = async (latitude, longitude) => {
    try {
        const { data } = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const { countryCode } = data;
        localStorage.setItem("countryCode", countryCode);
        return countryCode;
    } catch (error) {
        console.error("Error fetching location:", error);
    }
};