import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Box,
  Container,
  Flex,
  Title,
  TextInput,
  Paper,
  Button,
} from "@mantine/core";

export const AddCourse = () => {
  const [headerCourse, setHeaderCourse] = useState<string>("");
  const [authorCourse, setAuthorCourse] = useState<string>("");
  const [descriptionCourse, setDescriptionCourse] = useState<string>("");
  const [post, setPost] = useState<boolean>(false);
  const history = useNavigate();
  const createCourse = async () => {
    if (
      headerCourse === "" &&
      authorCourse === "" &&
      descriptionCourse === ""
    ) {
      return alert("Fill in the fields");
    } else {
      axios
        .post(
          "http://localhost:8080/api/course",
          {
            id: nanoid(),
            headerCourse,
            authorCourse,
            descriptionCourse,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Response", response);
        })
        .catch((err) => {
          throw new Error(err);
        });
      history("/");
    }
  };
  useEffect(() => {
    if (
      headerCourse === "" &&
      authorCourse === "" &&
      descriptionCourse === ""
    ) {
      setPost(false);
    } else createCourse();
  }, [post]);

  return (
    <form>
      <Box component={"div"}>
        <Container size={"xl"} p={"xl"}>
          <Flex justify={"center"} align={"center"}>
            <Title order={1}>Add the course language</Title>
          </Flex>
        </Container>
        <Container size={"sm"}>
          <Paper withBorder shadow="md" p={30} radius={"md"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              gap={"xl"}
            >
              <Box component={"div"} w={"300px"}>
                <label htmlFor="headerCourse">Header course:</label>
                <TextInput
                  type="text"
                  id="headerCourse"
                  value={headerCourse}
                  onChange={(e) => setHeaderCourse(e.target.value)}
                  placeholder="Input your header for the course..."
                />
              </Box>
              <Box component={"div"} w={"300px"}>
                <label htmlFor="authorCourse">Author for this course:</label>
                <TextInput
                  type="text"
                  id="authorCourse"
                  value={authorCourse}
                  onChange={(e) => setAuthorCourse(e.target.value)}
                  placeholder="Input who this created..."
                />
              </Box>
              <Box component={"div"} w={"300px"}>
                <label htmlFor="descriptionCourse">Description course:</label>
                <ReactQuill
                  theme="snow"
                  value={
                    !descriptionCourse ? "<br>" : `<p>${descriptionCourse}</p>`
                  }
                  onChange={(val) => {
                    setDescriptionCourse(
                      val.replaceAll(/<\/?p[^>]*>/g, "").replace("<br>", "")
                    );
                  }}
                  placeholder="Input your description for the course..."
                />
              </Box>
              <Box>
                <Button
                  fullWidth
                  onClick={() => {
                    setPost(!post);
                    createCourse();
                  }}
                >
                  Add Course
                </Button>
              </Box>
            </Flex>
          </Paper>
        </Container>
      </Box>
    </form>
  );
};
