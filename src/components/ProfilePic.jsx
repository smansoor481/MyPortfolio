import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useEffect, useState } from "react";

const ProfilePic = () => {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Dynamically load the image
        const loadImage = async () => {
            const img = await import("/mansoor.jpg"); // Import the image from the public folder
            setImage(img.default);  // Set the image once loaded
            setIsLoading(false);    // Set loading state to false
        };

        loadImage();
    }, []);

    return (
        <Tilt className="flex-[.5] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-full shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex justify-evenly items-center flex-col overflow-hidden"
                >
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <div className="border-t-4 border-purple border-solid w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full animate-spin overflow-hidden" />
                        </div>
                    ) : (
                        <img
                            src={image}
                            alt="Profile"
                            className="object-cover"
                        />
                    )}
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ProfilePic;
