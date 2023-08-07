import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const logoStyle = {
    filter: "invert(100%)", // Apply the filter to make the logos white
    paddingRight: "1rem",
  };

  return (
    <div
      style={{
        marginTop: "6rem",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid #ccc", // Add the top border as a divider
        width: "100%",
        paddingTop: "1rem",
      }}
    >
      <div className="mt-6 mb-6 flex justify-center">
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          style={logoStyle}
        >
          <a href="andrewdddobusiness@gmail.com">
            <Image src={"/gmail.svg"} alt="Gmail" height={30} width={30} />
          </a>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          style={logoStyle}
        >
          <a href="https://www.instagram.com/andrewdddo/">
            <Image
              src={"/instagram.svg"}
              alt="Instagram"
              height={30}
              width={30}
            />
          </a>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          style={logoStyle}
        >
          <a href="https://www.youtube.com/channel/UCLPAUfytUgzLdPZqCo_xPiA">
            <Image src="/youtube.svg" alt="YouTube" height={30} width={30} />
          </a>
        </motion.a>
      </div>

      <p>Created By Andrew</p>
      <small>&copy; 2023 Threads Infinity Counter. All rights reserved.</small>
    </div>
  );
};

export default Footer;
