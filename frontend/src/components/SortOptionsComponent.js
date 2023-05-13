import { Form } from "react-bootstrap";

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label='Default select example'>
      <option>Open this select menu</option>
      <option value='price_1'>Low to High</option>
      <option value='price_-1'>High to Low</option>
      <option value='rating_-1'>Rating</option>
      <option value='name_1'>A-Z</option>
      <option value='name_-1'>Z-A</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
