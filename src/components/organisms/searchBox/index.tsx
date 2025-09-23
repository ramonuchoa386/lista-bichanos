import * as React from "react"
import { Result } from "../../molecules"
import { SearchResultsWrapper } from "./styles"

interface ISelectTypes {
	name: string
	id: string
}

interface ITemperaments {
	ratingType: string
	stars: Array<any> // Changed to Array<any> because the array contains empty elements
}

interface IResult {
	imageSrc: string
	breedName: string
	breedDescription: string
	temperaments: Array<ITemperaments>
}

interface CatBreed {
	id: string
	name: string
	description: string
	affection_level: number
	adaptability: number
	child_friendly: number
	dog_friendly: number
}

interface CatImage {
	url: string
	breeds: CatBreed[]
}

function SearchBox() {
	const [results, setResult] = React.useState<IResult[]>([])
	const [options, setOptions] = React.useState<ISelectTypes[]>([])
	const [selectedBreed, setSelectedBreed] = React.useState("none")

	React.useEffect(() => {
		fetch("https://api.thecatapi.com/v1/breeds", {
			method: "GET",
			headers: new Headers({
				"x-api-key": "2a69daf0-8250-45b2-a41f-109d65cd74d8",
			}),
			mode: "cors",
			cache: "default",
		})
			.then((res) => res.json())
			.then((data: CatBreed[]) => {
				const rawOptions: Array<ISelectTypes> = []

				data.forEach((cat) => {
					rawOptions.push({ name: cat.name, id: cat.id })
				})

				setOptions(rawOptions)
			})
	}, [])

	React.useEffect(() => {
		if (selectedBreed !== "none") {
			fetch(
				`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}&limit=8`,
				{
					method: "GET",
					headers: new Headers({
						"x-api-key": "2a69daf0-8250-45b2-a41f-109d65cd74d8",
					}),
					mode: "cors",
					cache: "default",
				}
			)
				.then((res) => res.json())
				.then((data: CatImage[]) => {
					if (data.length > 0 && data[0].breeds.length > 0) {
						const cat = data[0]
						const breed = cat.breeds[0]

						const rawResults: Array<IResult> = []

						rawResults.push({
							imageSrc: cat.url,
							breedName: breed.name,
							breedDescription: breed.description,
							temperaments: [
								{
									ratingType: "Affection Level",
									stars: Array(breed.affection_level).fill(
										null
									),
								},
								{
									ratingType: "Adaptability",
									stars: Array(breed.adaptability).fill(null),
								},
								{
									ratingType: "Child Friendly",
									stars: Array(breed.child_friendly).fill(
										null
									),
								},
								{
									ratingType: "Dog Friendly",
									stars: Array(breed.dog_friendly).fill(null),
								},
							],
						})

						setResult(rawResults)
					} else {
						setResult([]) // Clear results if no data is returned
					}
				})
				.catch((error) => {
					console.error("Error fetching data:", error)
					setResult([]) // Clear results on error
				})
		} else {
			setResult([]) // Clear results if selectedBreed is "none"
		}
	}, [selectedBreed])

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedBreed(e.target.value)
	}

	return (
		<SearchResultsWrapper>
			<label htmlFor="search">
				Select the breed:
				<select
					name="breedSelection"
					onChange={handleSelectChange}
					defaultValue={selectedBreed}
				>
					<option value="none">Select the breed name</option>
					{options.map((option, index) => {
						return (
							<option key={`option-${option.id}`} value={option.id}>
								{option.name}
							</option>
						)
					})}
				</select>
			</label>
			{results.length === 0 ? (
				<p style={{ textAlign: "center" }}>Nenhum selecionado</p>
			) : (
				results.map((breedData, index) => (
					<Result
						key={`breed-${breedData.breedName}`}
						imageSrc={breedData.imageSrc}
						alterText={breedData.breedName}
						breedName={breedData.breedName}
						breedDescription={breedData.breedDescription}
						temperaments={breedData.temperaments}
					/>
				))
			)}
		</SearchResultsWrapper>
	)
}

export default SearchBox
