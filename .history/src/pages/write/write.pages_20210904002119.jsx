import React from "react";

const WritePage = () => {
  const submitWrite = (e) => {
    e.preventDefault();
    console.log(e.target.files);
  };

  return (
    <div className="write-container">
      <form onSubmit={submitWrite}>
        <input type="file" accept="image/*" />
        <input type="submit" />
      </form>
      <input type="text" />
    </div>
  );
};

export default WritePage;
