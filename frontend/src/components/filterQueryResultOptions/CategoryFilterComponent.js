import { Form } from "react-bootstrap";

const CategoryFilterComponent = () => {
  return (
    <>
      Category
      <Form>
        {Array.from({ length: 5 }).map((idx) => (
          <div key={idx} className='mb-3'>
            <Form.Check type='checkbox' id={`check-api2-${idx}`}>
              <Form.Check.Input type='checkbox' isValid />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                Category-{idx}
              </Form.Check.Label>
              <Form.Control.Feedback type='valid'>
                You did it!
              </Form.Control.Feedback>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};

export default CategoryFilterComponent;
