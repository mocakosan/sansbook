import { PlusOutlined } from "@ant-design/icons";
import PropTyes from "prop-types";
import { useCallback, useState } from "react";
import ImagesZoom from "./imagesZoom";
import { backUrl } from "./config/config";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  //이미지 1개일떄
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={encodeURIComponent(`${images[0].src}`)}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={`${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={`${images[1].src}`}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && (
          <ImagesZoom images={encodeURIComponent(images)} onClose={onClose} />
        )}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          style={{ width: "50%" }}
          src={`${images[0].src}`}
          alt={images[0].src}
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
      {showImagesZoom && (
        <ImagesZoom images={encodeURIComponent(images)} onClose={onClose} />
      )}
    </>
  );
};

PostImages.propTypes = {
  images: PropTyes.arrayOf(PropTyes.object),
};

export default PostImages;
