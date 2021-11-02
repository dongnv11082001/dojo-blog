import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogList = ({ blogs, title }) => {
	return (
		<div>
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<BlogPreview key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<BlogTitle>{blog.title}</BlogTitle>
						<p>Written by {blog.author}</p>
					</Link>
				</BlogPreview>
			))}
		</div>
	);
}

const BlogPreview = styled.div`
	padding: 10px 16px;
	margin: 20px 0;
	border-bottom: 1px solid #fafafa;
	a {
		text-decoration: none;
	}

	&:hover {
		box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
	}
`;

const BlogTitle = styled.h2`
	font-size: 20px;
	color: #f1356d;
	margin-bottom: 8px;
	text-decoration: none;
`;

export default BlogList;