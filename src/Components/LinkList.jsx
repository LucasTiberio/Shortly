import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addLink } from "../Redux/actions/LinkAction";
import LinkItem from "./LinkItem";

const Container = styled.div`
	background: ${props => props.theme.LightGray};
	padding: 0 10vw;
`;

const LinkList = () => {
	const dispatch = useDispatch();
	const [initiated, setInitiated] = useState(false);
	const links = useSelector(state => state.linklist);

	const initStorageWithRedux = () => {
		const storage = localStorage.getItem("addedLinks");
		if (storage !== null) {
			let parsedStorage = JSON.parse(storage);
			console.warn(parsedStorage);
			parsedStorage.map(item => dispatch(addLink(item)));
		}
		setInitiated(true);
	};

	useEffect(() => {
		initStorageWithRedux();
	}, []);

	return (
		<Container>
			{links.map(data => (
				<LinkItem key={data.hashid} data={data} />
			))}
		</Container>
	);
};

export default LinkList;
