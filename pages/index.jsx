import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, partnerId } from "../src/utils";
import { i18n } from '../i18n';

import MainPage from '../src/MainPage/MainPage'
import Layout from '../components/Layout/Layout'
import Products from '../src/Products/Products';
import Portfolio from '../src/Portfolio/Portfolio';
import Contact from '../src/Contact/Contact';

export default function index() {
	const [mainSlider, setMainSlider] = useState()
	useEffect(() => {
		axios
			.get(baseURL + `api/Slider/${partnerId}/${i18n.language}/`)
			.then((response) => setMainSlider(response.data.result))
	}, [i18n.language])

	return (
		<>
			<Layout page='/'>
				<>
					<MainPage />
				</>
			</Layout>
			<Products />
			<Portfolio />
			<Contact />
		</>
	)
}