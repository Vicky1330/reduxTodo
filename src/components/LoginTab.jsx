import * as Tabs from "@radix-ui/react-tabs";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Heading,
  Link,
  TabNav,
  Text,
  TextField,
} from "@radix-ui/themes";
import * as Label from "@radix-ui/react-label";
import { useState } from "react";

const LoginTab = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="">
      <Card size="3">
        <Flex align="center" justify="between" mb="5">
          <Heading as="h3" size="4" trim="both">
            Sign In
          </Heading>

        </Flex>

        <Flex direction="column" gap="4">

          <Flex asChild direction="column" gap="1">
            <Text as="label" size="2" weight="medium">
              <Text>Email</Text>
              <TextField.Root
                variant="classic"
                tabIndex={tabIndex}
                // defaultValue="hi@vladmoroz.com"
                placeholder="Enter email address"
              />
            </Text>
          </Flex>

          <Flex asChild direction="column" gap="1">
            <Text as="label" size="2" weight="medium">
              <Text>Username</Text>
              <TextField.Root
                variant="classic"
                tabIndex={tabIndex}
                type="password"
                placeholder="Password"
                // defaultValue="@vladmoroz"
              />
            </Text>
          </Flex>

          <div className="mt-5 flex justify-end">
            <Button variant="solid">Sign In</Button>
          </div>
        </Flex>
      </Card>
      <Card size="4">
        <TabNav.Root>
          <TabNav.Link href="#" active>
            Account
          </TabNav.Link>
          <TabNav.Link href="#">Documents</TabNav.Link>
          <TabNav.Link href="#">Settings</TabNav.Link>
        </TabNav.Root>
        <div className="mt-3">
          <fieldset className="mb-[15px] flex w-full flex-col justify-start">
            <label
              className="mb-2.5 block text-[13px] leading-none text-violet12"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="email"
            />
          </fieldset>

          <fieldset className="mb-[15px] flex w-full flex-col justify-start">
            <label
              className="mb-2.5 block text-[13px] leading-none text-violet12"
              htmlFor="confirmPassword"
            >
              Confirm password
            </label>
            <input
              className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="confirmPassword"
              type="password"
            />
          </fieldset>
          <div className="mt-5 flex justify-end">
            <Button variant="solid">Sign In</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginTab;
