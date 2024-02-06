import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import SelectCity from "../../components/SelectCity";import { useState } from "react";

export default function Home() {

  return (
    <main className={styles.main}>
      <Box
      w="100%"
      display="flex"
      flexDirection="column"
      gap={10}
      alignItems="center"
      padding={20}
    >
      <SelectCity />
    </Box>
    </main>
  );
}
