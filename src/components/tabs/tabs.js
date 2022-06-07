import {
  Flex,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { deleteItem, itemDone } from "../../redux/slices/listSlice";

const TabsComponent = () => {
  const items = useSelector((state) => state.list.items);
  const doneItems = useSelector((state) => state.list.done);
  const dispatch = useDispatch();

  const handleDoneClick = (item) => {
    dispatch(itemDone({ ...item }));
  };

  const handleDeleteClick = (item) => {
    dispatch(deleteItem({ ...item }));
  };

  return (
    <Tabs w="100%">
      <TabList color="white">
        <Tab>To - Do</Tab>
        <Tab>Done</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {items.length > 0 ? (
            items.map((item) => (
              <Flex
                key={item.id}
                border="1px solid gray"
                rounded="md"
                py="2"
                px="4"
                mb="4"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text color="white">{item.item}</Text>
                <Flex>
                  <Icon
                    as={MdDeleteForever}
                    color="white"
                    cursor="pointer"
                    mr="3"
                    w={4}
                    h={4}
                    onClick={() =>
                      handleDeleteClick({ ...item, type: "items" })
                    }
                  />
                  <Icon
                    as={IoMdCheckmarkCircleOutline}
                    color="white"
                    cursor="pointer"
                    onClick={() => handleDoneClick(item)}
                  />
                </Flex>
              </Flex>
            ))
          ) : (
            <Text color="white">No tasks added</Text>
          )}
        </TabPanel>
        <TabPanel>
          {doneItems.length > 0 ? (
            doneItems.map((item) => (
              <Flex
                key={item.id}
                border="1px solid gray"
                rounded="md"
                py="2"
                px="4"
                mb="4"
                justifyContent="space-between"
                alignItems="center"
              >
                <s style={{ color: "white" }}>{item.item}</s>
                <Icon
                  as={MdDeleteForever}
                  color="white"
                  cursor="pointer"
                  mr="3"
                  w={4}
                  h={4}
                  onClick={() => handleDeleteClick({ ...item, type: "done" })}
                />
              </Flex>
            ))
          ) : (
            <Text color="white">No tasks added</Text>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
