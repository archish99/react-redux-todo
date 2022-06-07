import logo from "./logo.svg";
import "./App.css";
import { Box, Heading, VStack } from "@chakra-ui/react";
import TabsComponent from "./components/tabs/tabs";
import InputComponent from "./components/input/input";

function App() {
  return (
    <Box h="100vh" bg="blue.900">
      <Heading p="4" color="white">
        To - Do
      </Heading>
      <VStack w="80%" mx="auto" justifyContent="space-between" h="80%">
        <TabsComponent />
        <InputComponent />
      </VStack>
    </Box>
  );
}

export default App;
