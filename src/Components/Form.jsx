import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import * as ShortenerService from "../Services/shortener.service.js";
import Button from "./Button";
import { addLink } from "../Redux/actions/LinkAction";

import BackgroundDesktop from "../assets/bg-shorten-desktop.svg";
import BackgroundMobile from "../assets/bg-shorten-mobile.svg";

const Container = styled.div`
	background: ${props => props.theme.GrayishViolet};
	background: ${props =>
		"linear-gradient(180deg, white 50%, " +
		props.theme.LightGray +
		" 50%)"};
	padding: 2vh 10vw;
	z-index: -2;
`;

const isResponsive = window.innerWidth < 800;

const Content = styled.div`
	position: relative;
	display: ${isResponsive ? "block" : "grid"};
	grid-template-columns: 1fr 15%;

	padding: 8vh 3vw;
	border-radius: 10px;

	overflow: hidden;

	background-color: ${props => props.theme.DarkViolet};

	input,
	button {
		position: relative;
		margin: ${!isResponsive && "0 1vw"};
		width: ${isResponsive && "100%"};
		z-index: 2;
	}

	button {
		margin-top: ${isResponsive && "2vh"};
	}

	.AbsoluteBackground {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: ${isResponsive && "100%"};
		pointer-events: none;
		z-index: -1;
	}
`;

const Input = styled.input`
	position: relative;
	outline: 0;
	margin: 0;
	border: 0;
	padding: 2vh 2vw;
	border-radius: 6px;
	border: ${props => (props.error ? "1px solid red" : "1px solid white")};

	font-size: ${isResponsive ? "0.95rem" : "1.1rem"};
	font-weight: 700;
	color: ${props => props.theme.LightBlack};

	::placeholder {
		color: ${props => props.theme.Gray};
	}
`;

const ErrorLabel = styled.span`
	position: absolute;
	top: 13%;
	left: 5%;

	z-index: 1;

	color: red;
	font-style: italic;
`;

const Form = () => {
	const [error, setError] = useState("");
	const [link, setLink] = useState("");
	const dispatch = useDispatch();

	const handleInputChangeLink = e => {
		setLink(e.target.value);
	};

	const containsObjInArray = (obj, list) => {
		var i;
		for (i = 0; i < list.length; i++) {
			if (list[i] === obj) {
				return true;
			}
		}
		return false;
	};

	const existsInStorage = data => {
		let storage = localStorage.getItem("addedLinks");
		if (storage === null) {
			return false;
		}
		let parsedStorage = JSON.parse(storage);
		return (
			parsedStorage.filter(item => item.hashid === data.hashid).length > 0
		);
	};

	const setInStorage = data => {
		let storage = localStorage.getItem("addedLinks");
		if (storage === null) {
			localStorage.setItem("addedLinks", JSON.stringify([data]));
		} else {
			let newData = JSON.parse(storage);

			newData.push(data);
			localStorage.setItem("addedLinks", JSON.stringify(newData));
		}
	};

	const handleClickNewLink = async () => {
		if (link === "") {
			setError("Please add a link");
			return;
		}

		let response = await ShortenerService.createLink(link);
		if (response.ans === true) {
			console.log(existsInStorage(response.data));
			if (!existsInStorage(response.data)) {
				dispatch(addLink(response.data));
				setInStorage(response.data);
				setLink("");
			} else {
				setError("Você já adicionou este link!");
			}
			return;
		} else {
			setError("Insert a valid link");
			return;
		}
	};

	return (
		<Container>
			<Content>
				<img
					className="AbsoluteBackground"
					src={isResponsive ? BackgroundMobile : BackgroundDesktop}
					alt="Background for Shorten"
				/>
				<Input
					value={link}
					error={error !== ""}
					onChange={handleInputChangeLink}
					placeholder="Shorten a link here..."
				/>
				{error && <ErrorLabel> {error} </ErrorLabel>}
				<Button light onClick={handleClickNewLink}>
					Shorten It!
				</Button>
			</Content>
		</Container>
	);
};

export default Form;
