import React from "react";
import styled from "styled-components";

const Btn = styled.button`
	outline: none;
	margin: none;
	border: none;
	padding: ${props => props.padding || "1.3vh 1.5vw"};
	border-radius: ${props =>
		props.light && props.rounded ? "25px" : props.light ? "5px" : "0px"};

	background: ${props =>
		props.copied
			? props.theme.DarkViolet
			: props.light
			? props.theme.Cyan
			: "transparent"};
	color: ${props => (props.light ? "white" : props.theme.Gray)};

	font-weight: bold;
	font-size: ${props => props.fontSize || "1rem"};

	cursor: pointer;
	transition: all 0.15s linear;
	&:hover {
		background: ${props =>
			props.copied
				? props.theme.DarkViolet
				: props.light
				? "hsl(178, 57%, 73%)"
				: "transparent"};
		color: ${props =>
			props.copied
				? "white"
				: props.light
				? "white"
				: props.theme.LightBlack};
	}
`;

const Button = ({
	onClick,
	padding,
	children,
	rounded,
	light,
	fontSize,
	copied
}) => {
	return (
		<Btn
			copied={copied}
			onClick={onClick}
			padding={padding}
			fontSize={fontSize}
			rounded={rounded}
			light={light}
		>
			{" "}
			{copied === true ? "Copied!" : children}{" "}
		</Btn>
	);
};

export default Button;
