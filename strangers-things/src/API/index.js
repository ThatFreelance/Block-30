const COHORT_NAME = "2302-acc-ct-web-pt-a"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



export async function summonApi() {
    try {
        const response = await fetch(API_URL)
        const result = await response.jason()
        console.table(result)
    } catch (error) {
        console.error(error)
    }
}

export default API_URL

