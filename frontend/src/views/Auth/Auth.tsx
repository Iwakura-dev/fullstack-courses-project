import { useState } from "react";
// Import the methods to redirect in the home page
import { useNavigate } from "react-router-dom";
// Import firebase
import { auth } from "../../entities/firebase/firebase";
// Import the firebase methods from the firebase/auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Import UI kit from the mantine
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Stack,
} from "@mantine/core";
// Import notifications from the mantine
import { notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

export const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(true);
  const history = useNavigate();
  // Add Autharization Function
  const authUser = async () => {
    if (login === false) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (data) => {
          console.log("Sign Up Data >>>", data);
          history("/");
          setLogin(false);
          notifications.show({
            title: "Sign Up",
            message: `Hello the ${email}`,
          });
        }
      );
    } else {
      await signInWithEmailAndPassword(auth, email, password).then((data) => {
        console.log("Sign In Data >>>", data);
        history("/");
        setLogin(true);
        notifications.show({
          title: "Sign In",
          message: `Welcome the back ${email}`,
        });
      });
    }
  };

  return (
    <form>
      <Container size={520} my={40}>
        <Title align={"center"}>
          {login ? "Login in to your Account" : "Create a new account"}
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius={"md"}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="you@gmail.dev"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Input your password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Stack>
          <Group position={"apart"} mt={"xs"}>
            <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size={"sm"}
            >
              Forgot password?
            </Anchor>
            <Button fullWidth onClick={authUser}>
              {login ? "Sign In" : "Sign Up"}
            </Button>
          </Group>
          {login ? (
            <Text c={"dimmed"} size={"sm"} align={"center"} mt={5}>
              You dont have any accounts ? {""}
              <Anchor<"a">
                href="#"
                size="sm"
                onClick={(event) => {
                  event.preventDefault(), setLogin(!login);
                }}
              >
                Sign Up
              </Anchor>
            </Text>
          ) : (
            <Text c={"dimmed"} size={"sm"} align={"center"} mt={5}>
              You dont have any accounts ? {""}
              <Anchor<"a">
                href="#"
                size="sm"
                onClick={(event) => {
                  event.preventDefault(), setLogin(!login);
                }}
              >
                Sign In
              </Anchor>
            </Text>
          )}
        </Paper>
      </Container>
    </form>
  );
};
