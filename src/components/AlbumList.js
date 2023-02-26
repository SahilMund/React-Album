import React from "react";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { usePosts } from "./../hooks/PostHook";
import Loader from "./Loader";

const AlbumList = ({ post }) => {
  const context = usePosts();

  const [loading, setLoading] = useState(false);

  const setEdit = async (postDataItem) => {
    // setting editable to true, to enable the edit input box and setting the data into context state.
    await context.setEditable(true);
    await context.setEditedData(postDataItem);

    // Populating the search box with the album's title when clicked on the edit button
    document.querySelector(".album-input").value = postDataItem.title;
  };

  const handleRemoveItem = async (id) => {
    // To remove an album from the list
    setLoading(true);
    await context.DeletePost(id);
    setLoading(false);
  };

  return (
    <div className="album-row">
      <div>{post.title}</div>
      <div className="icons">
        {/* Icon to handle remove functionality */}
        {loading ? (
          <>
            <Loader />
            <RiCloseCircleLine className="delete-icon" />
          </>
        ) : (
          <RiCloseCircleLine
            onClick={(e) => handleRemoveItem(post.id)}
            className="delete-icon"
          />
        )}

        {/* Icon to handle edit functionality */}
        <TiEdit onClick={() => setEdit(post)} className="edit-icon" />
      </div>
    </div>
  );
};

export default AlbumList;
