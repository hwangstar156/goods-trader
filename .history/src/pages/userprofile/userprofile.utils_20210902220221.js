const resizeImage = (settings) => {
  const file = settings.file;
  const maxSize = settings.maxSize;
  const image = new Image();
  img.crossOrigin = 'Anonymous'


출처: https://gupu.tistory.com/66 [구푸냥]
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
    console.log(image);
    console.log(canvas);
    const dataUrl = canvas.toDataURL("image/jpeg");
    return dataUrl;
  };

  return new Promise((ok, no) => {
    image.onload = () => {
      return ok(resize());
    };
    image.src = file;
  });
};

export default resizeImage;
