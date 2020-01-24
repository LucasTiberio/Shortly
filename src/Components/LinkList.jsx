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
	const links = useSelector(state => state.linklist);
	const dispatch = useDispatch();
	const [initiated, setInitiated] = useState(false);

	useEffect(() => {
		const initStorageWithRedux = () => {
			const storage = localStorage.getItem("addedLinks");
			if (storage !== null) {
				let parsedStorage = JSON.parse(storage);
				parsedStorage.map(item => dispatch(addLink(item)));
			}
			setInitiated(true);
		};

		initiated === false && initStorageWithRedux();
	}, [dispatch, initiated]);

	return (
		<Container>
			{links.map(data => (
				<LinkItem key={data.hashid} data={data} />
			))}
		</Container>
	);
};

export default LinkList;
