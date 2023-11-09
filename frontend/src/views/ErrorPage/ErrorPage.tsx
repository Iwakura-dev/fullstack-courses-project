import { Box, Container, Title, Text, Flex, rem } from "@mantine/core";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
  const vh = 100 + "vh";
  return (
    <Container>
      <Box>
        <Flex
          style={{ height: rem(vh) }}
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={10}
        >
          <Title>Oops, this page is not found!</Title>
          <Text>Sorry, an unexpected error has occurred.</Text>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Text color={"blue"}>Back the home page</Text>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};
