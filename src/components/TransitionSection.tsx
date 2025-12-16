import transitionImage from "@/assets/transition-image.png";

export const TransitionSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <img
          src={transitionImage}
          alt="WINGMEN project overview"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};
