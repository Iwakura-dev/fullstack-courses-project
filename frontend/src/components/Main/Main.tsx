import { useEffect, type SyntheticEvent, useState } from "react";
// Import the firebase and firebase methods
import { auth } from "../../entities/firebase/firebase";
import { signOut } from "firebase/auth";
// Import the UI kit from the mantine core
import { Box, Center, Container, Flex, Title, Text } from "@mantine/core";
// Import notification
import { notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
// Import axios
import axios from "axios";
// Import the post component where the render out the backend
import { Post } from "../Post/Post";

export const Main = () => {
  const [renderPost, setRenderPost] = useState([]);
  const logout = (e: SyntheticEvent) => {
    e.preventDefault();
    signOut(auth);
    notifications.show({
      title: "Log out",
      message: `You logout in your accounts`,
    });
    window.location.reload();
  };
  const getAllData = async () => {
    const { data } = await axios.get("http://localhost:8080/api/course");
    setRenderPost(data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Container fluid>
      <Center>
        <Flex direction={"column"} align={"center"} gap={"lg"}>
          <Box>
            <Title>
              Hello the{" "}
              {auth.currentUser?.email ? auth.currentUser?.email : "Adventure"}!
            </Title>
            {auth.currentUser?.email && (
              <button onClick={(e) => logout(e)}>Logout</button>
            )}
            <Text>This page show the all adding courses</Text>
          </Box>
        </Flex>
      </Center>
      <Post renderPost={renderPost} />
    </Container>
  );
};
