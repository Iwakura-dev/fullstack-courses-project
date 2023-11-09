import type { SyntheticEvent } from "react";
// Import the firebase and firebase methods
import { auth } from "../../entities/firebase/firebase";
import { signOut } from "firebase/auth";
// Import the UI kit from the mantine core
import { Box, Center, Container, Flex, Title, Text } from "@mantine/core";
// Import notification
import { notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

export const Main = () => {
  const logout = (e: SyntheticEvent) => {
    e.preventDefault();
    signOut(auth);
    notifications.show({
      title: "Log out",
      message: `You logout in your accounts`,
    });
    window.location.reload();
  };
  return (
    <Container>
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
          <Box></Box>
        </Flex>
      </Center>
    </Container>
  );
};
