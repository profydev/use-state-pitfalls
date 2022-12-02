// hidden

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import * as Challenge1 from "./Challenge-1";
import * as Challenge2 from "./Challenge-2";
import * as Solution1 from "./Solution-1";
import * as Solution2 from "./Solution-2";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Challenge Easy</Tab>
        <Tab>Challenge Advanced</Tab>
        <Tab>Solution Easy</Tab>
        <Tab>Solution Advanced</Tab>
      </TabList>

      <TabPanel>
        <Challenge1.RedundantStateEasy />
      </TabPanel>
      <TabPanel>
        <Challenge2.RedundantStateAdvanced />
      </TabPanel>
      <TabPanel>
        <Solution1.RedundantStateEasy />
      </TabPanel>
      <TabPanel>
        <Solution2.RedundantStateAdvanced />
      </TabPanel>
    </Tabs>
  );
}

export default App;
