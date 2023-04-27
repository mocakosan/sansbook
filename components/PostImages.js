import { PlusOutlined } from "@ant-design/icons";
import PropTyes from "prop-types";
import { useCallback, useState } from "react";
import ImagesZoom from "./imagesZoom";
import { backUrl } from "./config/config";

const PostImages = ({ images }) => {
  const image = encodeURIComponent(images);
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={`${image[0].src}`}
          alt={image[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={image} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={`${image[0].src}`}
          alt={image[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={`${image[1].src}`}
          alt={image[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={image} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          style={{ width: "50%" }}
          src={`${image[0].src}`}
          alt={image[0].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={image} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTyes.arrayOf(PropTyes.object),
};

export default PostImages;
