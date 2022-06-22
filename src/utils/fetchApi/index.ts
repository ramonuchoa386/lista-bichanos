const CATAPI_BASE_PATH = 'https://api.thecatapi.com/v1'
const CATAPI_KEY = '2a69daf0-8250-45b2-a41f-109d65cd74d8'

const requestHeaders = new Headers({
    'x-api-key': CATAPI_KEY,
})

const getBreed = async () => {
    const rawOptions: Array<any> = []

    await fetch(`${CATAPI_BASE_PATH}/breeds`, {
        method: 'GET',
        headers: requestHeaders,
        mode: 'cors',
        cache: 'default',
    })
        .then((res) => res.json())
        .then((data: Array<any>) => {
            data.forEach((cat) => {
                rawOptions.push({ name: cat.name, id: cat.id })
            })
        })

    return rawOptions
}

export const getBreedImageById = async (breedId: string) => {
    const rawResults: Array<any> = []

    await fetch(
        `${CATAPI_BASE_PATH}/images/search?breed_ids=${breedId}&limit=8`,
        {
            method: 'GET',
            headers: requestHeaders,
            mode: 'cors',
            cache: 'default',
        }
    )
        .then((res) => res.json())
        .then((data) => {
            rawResults.push({
                imageSrc: data[0].url,
                breedName: data[0].breeds[0].name,
                breedDescription: data[0].breeds[0].description,
                temperaments: [
                    {
                        ratingType: 'Affection Level',
                        stars: [...Array(data[0].breeds[0].affection_level)],
                    },
                    {
                        ratingType: 'Adaptability',
                        stars: [...Array(data[0].breeds[0].adaptability)],
                    },
                    {
                        ratingType: 'Child Friendly',
                        stars: [...Array(data[0].breeds[0].child_friendly)],
                    },
                    {
                        ratingType: 'Dog Friendly',
                        stars: [...Array(data[0].breeds[0].dog_friendly)],
                    },
                ],
            })

            return rawResults
        })
}

export default getBreed
