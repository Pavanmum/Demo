
import './App.css';
import { Collapse,Divider } from 'antd';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function App() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
   <Divider orientation="left">Welcome</Divider>
      <Collapse onChange={onChange}>
        <Panel header="Hello" key="1">
          <Collapse size="small" onChange={onChange}>
            <Panel header="may i help you" key="2">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>
      <Divider orientation="left">Hello </Divider>
      <Collapse onChange={onChange}>
        <Panel header="good morning" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>

    </>
  );
}

export default App;
