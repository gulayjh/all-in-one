import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, partnerId } from "../src/utils";
import { i18n } from '../i18n';

import MainPage from '../src/MainPage/MainPage'
import Layout from '../components/Layout/Layout'

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
		</>
	)
}