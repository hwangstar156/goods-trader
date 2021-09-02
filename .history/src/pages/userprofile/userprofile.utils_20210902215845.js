const resizeImage = (settings) => {
  const file = settings.file;
  const maxSize = settings.maxSize;
  const image = new Image();
  const canvas = document.createElement("canvas");

  const resize = () => {
    let width = image.width;
    let height = image.height;
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
    }
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/jpeg");
    return dataUrl;
  };

  return new Promise((ok, no) => {
    image.src = file;
    image.onload = () => {
      return ok(resize());
    };
  });
};

export default resizeImage;
