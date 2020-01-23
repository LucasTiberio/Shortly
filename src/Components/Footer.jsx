import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

import logo from "../assets/logo.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import PinterestIcon from "../assets/icon-pinterest.svg";
import InstagramIcon from "../assets/icon-instagram.svg";

const isResponsive = window.innerWidth < 800;

const Container = styled.div`
	background: ${props => props.theme.VeryDarkViolet};
	color: white;
	padding: 8vh 4vw;
`;

const Title = styled.span`
	display: block;
	margin-bottom: ${isResponsive ? "1vh" : "3vh"};
	font-size: ${isResponsive && "0.9rem"};

	color: white;
	font-weight: bold;
`;

const Item = styled.span`
	display: block;
	margin: ${isResponsive ? "1vh 0" : "1.5vh 0"};
	font-size: ${isResponsive && "0.9rem"};

	color: ${props => props.theme.GrayishViolet};
	font-weight: bold;

	transition: color 0.1s linear;
	cursor: pointer;
	&:hover {
		color: ${props => props.theme.Cyan};
	}
`;

const CustomCol = styled(Col)`
	display: ${isResponsive && "flex"};
	flex-direction: ${props => !props.row && "column"};
	justify-content: ${isResponsive && "center"};
	align-items: ${isResponsive && "center"};
	margin: 3vh 0;
`;

const Img = styled.img`
	&.logo {
		filter: invert(96%) sepia(100%) saturate(4%) hue-rotate(61deg)
			brightness(104%) contrast(100%);
	}
	&:not(.logo) {
		cursor: pointer;
		margin: 0 1vw;
		transition: all 0.1s linear;
		&:hover {
			filter: invert(71%) sepia(49%) saturate(532%) hue-rotate(129deg)
				brightness(300%) contrast(83%);
		}
	}
`;

const Footer = () => {
	return (
		<Container>
			<Row>
				<CustomCol xs="12" md="3">
					<Img className="logo" src={logo} alt="Shortly logo" />
				</CustomCol>
				<CustomCol xs="12" md="2">
					<Title>Features</Title>
					<Item>Link Shortening</Item>
					<Item>Branded Links</Item>
					<Item>Analytics</Item>
				</CustomCol>
				<CustomCol xs="12" md="2">
					<Title>Resources</Title>
					<Item>Blog</Item>
					<Item>Developers</Item>
					<Item>Support</Item>
				</CustomCol>
				<CustomCol xs="12" md="2">
					<Title>Company</Title>
					<Item>About</Item>
					<Item>Our Team</Item>
					<Item>Carrers</Item>
					<Item>Contact</Item>
				</CustomCol>
				<CustomCol row="true" xs="12" md="3">
					<Img src={FacebookIcon} alt="Facebook link" />
					<Img src={TwitterIcon} alt="Twitter link" />
					<Img src={PinterestIcon} alt="Pinterest link" />
					<Img src={InstagramIcon} alt="Instagram link" />
				</CustomCol>
			</Row>
		</Container>
	);
};

export default Footer;
