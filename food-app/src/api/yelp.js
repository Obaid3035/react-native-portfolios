import axios from "axios";

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer zPk8MPe-VZrB9PuhPTowfTRRt6JYjpAWfrs8f3SD9ouKr9zMEIM_wAGbB1UCpxtnGGezaw86nlB362iH0dYnPuFZivDdA5YgyS9gNFpK91-aALIKrXJ2NewzoGhzY3Yx',

	}
});
