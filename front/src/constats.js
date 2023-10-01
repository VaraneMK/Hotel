import { useEffect, useRef } from 'react';

export const REVIEWS = 'reviews';
export const QUESTIONS = 'questions';
export const GALLERY = 'gallery';
export const ROOMS = 'rooms';
export const ABOUT = 'about';
export const SERVICES = 'services';
export const CONTACTS = 'contacts';
export const BASE_URL = 'http://localhost:8000';

export const cyrillicPattern = /^[\u0400-\u04FF]+$/;
export const telPattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

export const setClassNameByValid = (valid) => {
	return valid ? 'input input__error' : 'input';
};

export const scrollById = (id) => {
	const element = document.getElementById(`${id}`);
	const y = element.offsetTop;
	window.scrollTo({
		top: y,
		left: 0,
		behavior: 'smooth',
	});
};

export const useComponentDidMount = () => {
	const ref = useRef();
	useEffect(() => {
		ref.current = true;
	}, []);
	return ref.current;
};

export const normalize_count_form = (number, words_arr) => {
	number = Math.abs(number);
	if (Number.isInteger(number)) {
		let options = [2, 0, 1, 1, 1, 2];
		return words_arr[number % 100 > 4 && number % 100 < 20 ? 2 : options[number % 10 < 5 ? number % 10 : 5]];
	}
	return words_arr[1];
};

export const getNightsCount = (toDate, fromDate) => {
	let msDay = 60 * 60 * 24 * 1000;
	return Math.floor((fromDate - toDate) / msDay);
};

export const getDateToString = (date) => {
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	return `${year}-${month}-${day}`;
};
