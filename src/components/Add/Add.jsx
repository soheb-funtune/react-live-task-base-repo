import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../state/slice";

const Add = () => {
  const dispatch = useDispatch();
  const [fieldData, setFieldData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fieldData?.title && fieldData?.body) {
      dispatch(addPost(fieldData));
      setFieldData({ title: "", body: "" });
      alert("Details are Submited !");
    } else {
      alert("All Fields are Required !");
    }
    console.log({ fieldData });
  };
  return (
    <div className="add-container">
      <h2>Add To List</h2>
      <form onSubmit={handleSubmit} className="field-container">
        <div className="input-wrap">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title"
            value={fieldData?.title}
            onChange={(e) =>
              setFieldData({ ...fieldData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            name="body"
            placeholder="Enter body text"
            value={fieldData?.body}
            onChange={(e) =>
              setFieldData({ ...fieldData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
