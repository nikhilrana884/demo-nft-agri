import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Loader.module.css";
import images from "../../img";

const Loader = () => {
  return (
    <div className={Style.Loader}>
      <div className={Style.Loader_box}>
        <div className={Style.Loader_box_img}>
          
        </div>
      </div>
    </div>
  );
};

export default Loader;
