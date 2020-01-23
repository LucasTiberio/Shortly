import React from "react";
import styled from "styled-components";

import Button from "../Button";
import HeaderMobile from "./HeaderMobile.jsx";
import HeaderDesktop from "./HeaderDesktop.jsx";

const Title = styled.span`
	font-size: 2rem;
	font-weight: 700;
	margin-right: 1.5vw;
	color: ${props => props.theme.LightBlack || "black"};
`;

const HeaderInfo = {
	title: <Title>Shortly</Title>,
	buttons: {
		out: [
			<Button key={1}>Features</Button>,
			<Button key={2}>Pricing</Button>,
			<Button key={3}>Resources</Button>
		],
		in: [
			<Button key={1}>Login</Button>,
			<Button key={2} rounded light>
				Sign Up
			</Button>
		]
	}
};

const Header = () => {
	const isResponsive = window.innerWidth < 800;
	const FitHeader = isResponsive ? HeaderMobile : HeaderDesktop;
	return <FitHeader data={HeaderInfo} />;
};

export default Header;
