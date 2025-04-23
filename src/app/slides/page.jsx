import dynamic from "next/dynamic";

const SlideShow = dynamic(() => import("./SlideShow"), { ssr: false });

export default function SlidesPage() {
  return <SlideShow />;
}
