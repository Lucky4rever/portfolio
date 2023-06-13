import { useState, useEffect } from "react";
import App from "./App";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { motion } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      const gltfLoader = new GLTFLoader();

      const loadFile = (url: string) =>
        new Promise((resolve, reject) => {
          gltfLoader.load(
            url,
            (gltf) => resolve(gltf),
            undefined,
            (error) => reject(error)
          );
        });

      try {
        const model = await loadFile("/Korok/scene.gltf");

        if (model)
          setIsLoading(false);
      } catch (error) {
        console.error("Помилка завантаження моделі:", error);
        setIsLoading(false);
      }
    };

    loadModel();
  }, []);

  if (isLoading) {
    return (
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    );
  }

  return <App />;
};

export default Loader;