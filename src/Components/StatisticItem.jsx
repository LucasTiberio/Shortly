import React from "react";
import styled from "styled-components";

const isResponsive = window.innerWidth < 800;

const Container = styled.div`
	position: relative;
	margin-top: 15vh;
	padding: 10%;

	box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);
	background: white;
`;

const Icon = styled.div`
	position: absolute;
	top: -16%;
	left: ${isResponsive ? "50%" : "10%"};
	transform: ${isResponsive && "translateX(-50%)"};

	padding: 6%;
	border-radius: 100%;
	background: ${props => props.theme.DarkViolet};

	img {
		width: 100%;
	}
`;

const Title = styled.span`
	display: block;
	font-weight: bold;

	font-size: 1.2rem;
	margin-top: 6vh;

	color: ${props => props.theme.LightBlack};
`;

const Description = styled.span`
	display: block;
	margin-top: 3vh;

	color: ${props => props.theme.GrayishViolet};
	font-weight: bold;
`;

const StatisticItem = ({ icon, title, description }) => {
	return (
		<Container>
			<Icon>
				{" "}
				<img src={icon} alt={"Image for " + title} />{" "}
			</Icon>
			<Title> {title} </Title>
			<Description> {description} </Description>
		</Container>
	);
};

export default StatisticItem;
