import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[
        { setting: ["system", "magic", "cultivation"] },
        { plot: ["action", "romance", "adventure"] },
        { character: ["villain", "antihero", "genius"] },
        { tone: ["comedy", "mystery", "dark"] },
      ].map((item, idx) => (
        <div key={idx} className='mb-3'>
          <Form.Label>
            <b>{Object.keys(item)}</b>
          </Form.Label>
          {item[Object.keys(item)].map((i, idx) => (
            <Form.Check
              key={idx}
              type='checkbox'
              id='default-checkbox'
              label={i}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;
