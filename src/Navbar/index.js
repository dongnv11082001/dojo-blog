import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {

	return (
		<Nav>
			<Title>The Dojo Blog</Title>
			<NavLink>
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
			</NavLink>
		</Nav>
	);
}

const Nav = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	max-width: 600px;
	margin: 0 auto;
	border-bottom: 1px solid #f2f2f2;
	a {
		margin-left: 16px;
		text-decoration: none;
		padding: 6px;
		&:hover {
			color: #f1356d;
		}
	}
`;

const Title = styled.h1`
	color: #f1356d;
`;

const NavLink = styled.div`
	margin-left: auto;
`;

export default Navbar;