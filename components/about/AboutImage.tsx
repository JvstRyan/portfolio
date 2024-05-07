import Image from "next/image";

const AboutImage = () => {
  
  return (
    <>
        <Image
          src="/about.webp"
          alt="3d model"
          width={650}
          height={600}
          style={{ marginTop: "4rem" }}
          draggable={false}
        />
    </>
  );
};

export default AboutImage;
