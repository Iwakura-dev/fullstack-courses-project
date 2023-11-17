import {
  Box,
  Container,
  Flex,
  Title,
  Text,
  Paper,
  Button,
} from "@mantine/core";
import axios from "axios";

export const Post = ({ renderPost }) => {
  const idPost = renderPost.map((item) => {
    return item.id;
  });
  const deletePost = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/course/${idPost.join("")}`
      );
      window.location.reload();
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Container fluid p={"100px"}>
      <Flex wrap={"wrap"}>
        {renderPost.map((item, index) => {
          return (
            <Container key={index} size={"sm"}>
              <Paper withBorder shadow="xl" p={"24px"}>
                <Flex gap={"md"} direction={"column"} align={"center"}>
                  <Flex align={"center"} gap={"lg"}>
                    <Title order={2}>{item.headerCourse}</Title>
                    <Text>
                      Author: <b>{item.authorCourse}</b>
                    </Text>
                  </Flex>
                  <Box>
                    <Text>{item.descriptionCourse}</Text>
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
