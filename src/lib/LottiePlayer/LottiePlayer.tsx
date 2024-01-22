import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

function LottiePlayer({
  src,
  style,
}: {
  src: object;
  style: {
    width: string;
    height: string;
  };
}) {
  return <Lottie loop play animationData={src} style={style} />;
}

export default LottiePlayer;
