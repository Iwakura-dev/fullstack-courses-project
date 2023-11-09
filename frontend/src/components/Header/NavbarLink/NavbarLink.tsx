import { Tooltip, UnstyledButton, rem } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import styles from "./NavbarLink.module.css";
import { Link } from "react-router-dom";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

export function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={styles.link}
        data-active={active || undefined}
      >
        <Link to={"/" + label.toLowerCase()}>
          <Icon
            style={{ width: rem(20), height: rem(20) }}
            stroke={1.5}
            color="var(--mantine-color-text)"
          />
        </Link>
      </UnstyledButton>
    </Tooltip>
  );
}
