import jimp from "jimp";

const resizeImg = (path) => {
  jimp.read(path).then((img) => img.resize(256, 256).write(path));
};

export default resizeImg;
