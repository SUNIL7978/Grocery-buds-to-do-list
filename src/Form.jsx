import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('Provide the value ');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>To-Do-List</h4>
      <div className="form-control">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="form-input"
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
