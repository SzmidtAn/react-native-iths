import {API_TOKEN, API_URL} from "./constants";


class DataAPI{


    getCategories () {
        return  fetch(API_URL + "categories/", {
            mode: 'cors',
            headers: {
                'Authorization': API_TOKEN,
            },
        })
    }


    getRandomDog(cat) {
        return  fetch("https://dog.ceo/api/breeds/image/random")
    }

    getEventsForSubcategory(cat) {
        return  fetch(API_URL + "subcategories/" + cat + "/", {
            mode: 'cors',
            headers: {
                'Authorization': API_TOKEN,
            },
        })
    }

    getRandomCat() {
        return  fetch("https://api.thecatapi.com/v1/images/search")

    }

    getAllCats() {
        return  fetch("https://api.thecatapi.com/v1/images/search/?limit=25")

    }
}

const dataApi = new DataAPI()
export {dataApi}