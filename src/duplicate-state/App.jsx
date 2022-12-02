// hidden

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import * as Challenge from "./Challenge";
import * as Solution from "./Solution";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Challenge</Tab>
        <Tab>Solution</Tab>
      </TabList>

      <TabPanel>
        <Challenge.DuplicateState />
      </TabPanel>
      <TabPanel>
        <Solution.DuplicateState />
      </TabPanel>
    </Tabs>
  );
}

export default App;
