import * as React from "react"
import { Result } from "../../molecules"
import { SearchResultsWrapper } from "./styles"

interface ISelectTypes {
	name: string
	id: string
}

interface ITemperaments {
	ratingType: string
	stars: Array<number>
}

interface IResult {
	imageSrc: string
	breedName: string
	breedDescription: string
	temperaments: Array<ITemperaments>
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
			.then((data: Array<any>) => {
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
				.then((data: Array<any>) => {
					const rawResults: Array<IResult> = []

					if (data.length > 0 && data[0].breeds && data[0].breeds.length > 0) {
						rawResults.push({
							imageSrc: data[0].url,
							breedName: data[0].breeds[0].name,
							breedDescription: data[0].breeds[0].description,
							temperaments: [
								{
									ratingType: "Affection Level",
									stars: Array(data[0].breeds[0].affection_level).fill(0),
								},
								{
									ratingType: "Adaptability",
									stars: Array(data[0].breeds[0].adaptability).fill(0),
								},
								{
									ratingType: "Child Friendly",
									stars: Array(data[0].breeds[0].child_friendly).fill(0),
								},
								{
									ratingType: "Dog Friendly",
									stars: Array(data[0].breeds[0].dog_friendly).fill(0),
								},
							],
						});
					}

					setResult(rawResults)
				})
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
					{options.map(
						(
							option: { id: string; name: string },
							index: number
						) => {
							return (
								<option
									key={`option-${option.id}`}
									value={option.id}
								>
									{option.name}
								</option>
							)
						}
					)}
				</select>
			</label>
			{results.length === 0 ? (
				<p style={{ textAlign: "center" }}>Nenhum selecionado</p>
			) : (
				results.map(
					(
						breedData: {
							breedName: string
							imageSrc: string
							breedDescription: string
							temperaments: Array<ITemperaments>
						},
						index: number
					) => (
						<Result
							key={`breed-${breedData.breedName}`}
							imageSrc={breedData.imageSrc}
							alterText={breedData.breedName}
							breedName={breedData.breedName}
							breedDescription={breedData.breedDescription}
							temperaments={breedData.temperaments}
						/>
					)
				)
			)}
		</SearchResultsWrapper>
	)
}

export default SearchBox
