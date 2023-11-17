import {
  Box,
  Container,
  Flex,
  Title,
  Burger,
  Collapse,
  Stack,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSun,
  IconMoon,
  IconHome2,
  IconUser,
  IconSettings,
  IconBallpen,
} from "@tabler/icons-react";
import cx from "clsx";
import styles from "./Header.module.css";
import { useState } from "react";
import { NavbarLink } from "./NavbarLink/NavbarLink";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

interface INavLink {
  icon: typeof IconHome2;
  id: string;
  label: string;
}

export const Header = () => {
  const [active, setActive] = useState<number | null>(null);
  const { setColorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const navlink: INavLink[] = [
    { id: nanoid(), label: "Home", icon: IconHome2 },
    { id: nanoid(), label: "Auth", icon: IconUser },
    { id: nanoid(), label: "AddCourse", icon: IconBallpen },
    { id: nanoid(), label: "Settings", icon: IconSettings },
  ];
  const navlinks = navlink.map((item, index) => (
    <NavbarLink
      {...item}
      key={item.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));
  return (
    <Box component={"div"}>
      <Container p={24} size={"xl"}>
        <Flex justify={"space-between"} align={"center"}>
          <Box>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Title order={3} c={"var(--mantine-color-text)"}>
                ⌨️ Courses.com
              </Title>
            </Link>
          </Box>
          <Box>
            <Flex align={"center"} gap={"sm"}>
              <Box>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  aria-label="Toggle the navigation"
                />
              </Box>
              <ActionIcon
                onClick={() =>
                  setColorScheme(
                    computedColorScheme === "light" ? "dark" : "light"
                  )
                }
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
              >
                <IconSun
                  className={cx(styles.icon, styles.light)}
                  stroke={1.5}
                />
                <IconMoon
                  className={cx(styles.icon, styles.dark)}
                  stroke={1.5}
                />
              </ActionIcon>
            </Flex>
          </Box>
        </Flex>
      </Container>
      {opened && (
        <nav className={styles.navbar}>
          <Collapse in={opened}>
            <Stack justify="center" gap={24}>
              {navlinks}
            </Stack>
          </Collapse>
        </nav>
      )}
    </Box>
  );
};
