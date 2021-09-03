import React from "react";

const WritePage = () => {
  const onChangeFiles = (e) => {
      const file = e.target.files[0];
      if(!file){
          return
    };
      if(!file.type.match(/image.*/)){
          return;
      }
    const reader = new FileReader();
    reader.onload = 
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
