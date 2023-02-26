import React from "react";
import { useState, useRef, useEffect } from "react";
import { usePosts } from "./../hooks/PostHook";

const CreateAlbumItem = () => {
  const context = usePosts();
  const [input, setInput] = useState(
    context.editable ? context.editedData.title : ""
  );

  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  //  to focus the cursor to the input text box
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    // to handle the onchange event of inputs
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // to prevent the data from adding when nothing entered in the input
    if (!input) return;

    setLoading(true);
    //  adding a new album to the list and setting the  value of the input tag to empty string
    await context.addPost({
      // to generate a random userId
      userId: Math.floor(Math.random() * 100) + 10,
      //  id will be current posts array length + 1
      id: Date.now(),
      title: input,
    });

    setLoading(false);
    setInput("");
    return;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Getting the current value
    const title = inputRef.current.value;

    setLoading(true);
    // calling the edit function to implement it and setting the editable to false to show the add input
    await context.EditPost(title);
    await context.setEditable(false);
    
    setLoading(false);
    setInput("");
    return;
  };

  const handleCancel = (e) => {
    // setting the editable to false to show the add input
    e.preventDefault();
    context.setEditable(false);
    setInput("");
    return;
  };

  return (
    <form className="album-form">
      {context.editable ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="title"
            ref={inputRef}
            className="album-input edit"
          />
          <button
            onClick={handleUpdate}
            className="album-button edit"
            disabled={loading}
          >
            {loading ? "Updating......" : "Update"}
          </button>
          {!loading && (
            <button onClick={handleCancel} className="album-button cancel">
              Cancel
            </button>
          )}
        </>
      ) : (
        <>
          <input
            placeholder="Add a Album"
            value={input}
            onChange={handleChange}
            name="title"
            className="album-input"
            ref={inputRef}
            disabled={loading}
          />
          <button onClick={handleSubmit} className="album-button">
            {loading ? "Adding....... " : "Add Album"}
          </button>
        </>
      )}
    </form>
  );
};

export default CreateAlbumItem;
