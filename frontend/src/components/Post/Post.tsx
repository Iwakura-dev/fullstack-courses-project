// Import UI elements in our Mantine
import {
	Box,
	Container,
	Flex,
	Title,
	Text,
	Paper,
	Button,
} from '@mantine/core';
// Import types in our axios for the error binding
import type { AxiosError } from 'axios';
// Import the interface to types error
import { IError } from '../../types/axios-error';
// Import the interface to types to our state
import { IGetCourseObject } from '../../types/course-object';
// import the config axios
import { instance } from '../../config/axios.config';

export const Post: React.FC<{ renderPost: IGetCourseObject[] }> = ({
	renderPost,
}) => {
	const idPost = renderPost.map(item => {
		return item.id;
	});
	const deletePost = async () => {
		try {
			await instance.delete(`all-course/${idPost.join('')}`);
			window.location.reload();
		} catch (err) {
			const error = err as AxiosError<IError>;
			console.log(error.response?.data.message);
		}
	};

	return (
		<Container fluid p={'100px'}>
			<Flex wrap={'wrap'}>
				{renderPost.map((item, index) => {
					return (
						<Container key={index} size={'sm'}>
							<Paper withBorder shadow='xl' p={'24px'}>
								<Flex gap={'md'} direction={'column'} align={'center'}>
									<Flex align={'center'} gap={'lg'}>
										<Title order={2}>{item.header_course}</Title>
										<Text>
											Author: <b>{item.author_name}</b>
										</Text>
									</Flex>
									<Box>
										<Text>{item.description_name}</Text>
									</Box>
									<Box>
										<Button onClick={deletePost}>Delete Course</Button>
									</Box>
								</Flex>
							</Paper>
						</Container>
					);
				})}
			</Flex>
		</Container>
	);
};
