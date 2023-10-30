import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins-Bold.ttf",
      weight: "bold",
    },
    {
      path: "../../../public/fonts/Poppins-SemiBold.ttf",
      style: "600",
    },
    {
      path: "../../../public/fonts/Poppins-Regular.ttf",
      weight: "normal",
    },
  ],
});

export default poppins;
