import React from "react";

const WritePage = () => {
  const onChangeFiles = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div className="write-container">
      <form>
        <input type="file" accept="image/*" onChange={onChangeFiles} />
        <input type="submit" />
      </form>
      <input type="text" />
    </div>
  );
};

export default WritePage;
