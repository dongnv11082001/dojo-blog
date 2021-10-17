import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();


	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsPending(true);

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('new blog');
			setIsPending(false);
			history.push('/')
		})
	}

	return (
		<CreateBlog>
			<Title>Add a new blog</Title>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog author:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>
				{!isPending && <CreateButton>Add blog</CreateButton>}
				{isPending && <CreateButton disabled>Adding blog...</CreateButton>}
			</form>
		</CreateBlog>
	);
}

const CreateBlog = styled.div`
	max-width: 400px;
	margin: 0 auto;
	text-align: center;
	label {
		text-align: left;
		display: block;
	}

	input, 
	textarea, 
	select {
		width: 100%;
		padding: 6px 10px;
		margin: 10px 0;
		border: 1px solid #ddd;
		box-sizing: border-box;
		display: block;
	}
`;

const Title = styled.h2`
	font-size: 20px;
	color: #f1356d;
	margin-bottom: 30px;
`;

const CreateButton = styled.button`
	background: #f1356d;
  	color: #fff;
	border: 0;
	padding: 8px;
	border-radius: 8px;
	cursor: pointer;
`;

export default Create;