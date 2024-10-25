import {
  Avatar,
  Box,
  Button,
  Card,
  CheckboxGroup,
  Flex,
  Heading,
  Separator,
  Text,
  TextField,
  Theme,
} from "@radix-ui/themes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, checkTodo, removeTodo } from "../features/todo/todoSlice";
import { MdDelete } from "react-icons/md";
// import { MdDelete } from "react-icons/md";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const checkedTodos = useSelector((state)=> state.complete)
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodoItem = () => {
    // Dispatch an action here with the title or other necessary payload
    setTitle("");
    console.log("Todo item added:", title);
    dispatch(addTodo(title));
  };
  //   console.log("Todo item added:", todos);
  const handleDelete = (e) => {
    console.log("Todo item deleted:", e);
    dispatch(removeTodo(e));
  };
  const handleCheck = (id) => {
    dispatch(checkTodo(id));
    console.log(checkedTodos)
  }
  return (
    <div>
      <Box width="340px">
        <Card size="2">
          <Flex justify="between">
            <Heading color="black">Todo List</Heading>

            <Avatar size="5" src="gojo.jpg" fallback="A" />
          </Flex>
            <Heading size="2" color="">Vicky this side😎</Heading>
          <Text as="p" size="3" weight="light">
            Add tasks to complete.
          </Text>
          <Theme radius="medium" className="mb-2">
            <TextField.Root
              size="3"
              placeholder="Add Todo"
              onChange={(e) => setTitle(e.target.value)}
            >
              <TextField.Slot side="right" px="1">
                <Button type="submit" onClick={addTodoItem} size="2">
                  Add
                </Button>
              </TextField.Slot>
            </TextField.Root>
          </Theme>

          {/* Todo Lists */}
          {todos.map((todo) => (
            <CheckboxGroup.Root
              key={todo.id}
              color="crimson"
              defaultValue={["1"]}
              name="example"
            >
              <Flex justify="between">
                <CheckboxGroup.Item value="" onClick={() => handleCheck(todo.id)}>
                  <Text weight="medium" size="3">
                    {todo.text}
                  </Text>
                </CheckboxGroup.Item>
                <MdDelete type="submit" onClick={() => handleDelete(todo.id)} />
              </Flex>
              {/* Separator spanning full width */}
            </CheckboxGroup.Root>
          ))}

          <hr className="border-gray-200 my-2"></hr>
          <Heading size="3" className="mb-2">Completed task✌</Heading>
          {
            checkedTodos.length > 0? (
                checkedTodos.map((todo) =>(
                    <CheckboxGroup.Root
                    key={todo.id}
                    color="crimson"
                    defaultValue={["1"]}
                    name="example"
                  >
                    <Flex justify="between">
                      <CheckboxGroup.Item value="1" onClick={() => handleCheck(todo.id)}>
                        <Text weight="medium" size="3">
                          {todo.text}
                        </Text>
                      </CheckboxGroup.Item>
                      <MdDelete type="submit" onClick={() => handleDelete(todo.id)} />
                    </Flex>
                    {/* Separator spanning full width */}
                  </CheckboxGroup.Root>
                ))
            ) : null
          }
        </Card>
      </Box>
    </div>
  );
};

export default Todo;
