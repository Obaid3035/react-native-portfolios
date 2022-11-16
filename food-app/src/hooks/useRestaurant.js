import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
	const [restaurants, setRestaurants] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null)
	useEffect(() => {
		searchApi('Pasta')
	}, []);


	const searchApi = async (searchTerm) => {
		try {
			const res = await yelp.get(`/search`, {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			})
			setRestaurants(res.data.businesses)
		} catch (e) {
			setErrorMessage('Something went wrong')
		}
	}
	return [searchApi, restaurants, errorMessage]
}
