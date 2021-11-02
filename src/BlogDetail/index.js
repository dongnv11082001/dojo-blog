import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import styled from 'styled-components';

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const hanleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => history.push('/'))
    }

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <BlogTitle>{blog.title}</BlogTitle>
                    <p>Written by {blog.author}</p>
                    <BlogBody>{blog.body}</BlogBody>
                    <Button onClick={hanleClick}>Delete</Button>
                </article>
            )}
        </div>
    );
}

const BlogBody = styled.div`
	margin: 20px 0;
    text-align: justify;
    line-height: 1.6;
`;

const BlogTitle = styled.h2`
	font-size: 20px;
	color: #f1356d;
	margin-bottom: 10px;
`;

const Button = styled.button`
	background: #f1356d;
	color: #fff;
	border: 0;
	padding: 8px;
	border-radius: 8px;
	cursor: pointer;
`;


export default BlogDetail;