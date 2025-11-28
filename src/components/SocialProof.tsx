import lightlabsLogo from "@/assets/logos/lightlabs_logo.png";
import tenorLogo from "@/assets/logos/tenortherapy_logo.png";
import webdoxLogo from "@/assets/logos/webdox_logo.png";
import samsaraLogo from "@/assets/logos/samsara_logo.png";

const logos = [
  { src: lightlabsLogo, alt: "Light Labs" },
  { src: tenorLogo, alt: "Tenor", bigger: true },
  { src: webdoxLogo, alt: "Webdox" },
  { src: samsaraLogo, alt: "Samsara" },
];

const SocialProof = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className={`${logo.bigger ? 'h-8 md:h-10' : 'h-6 md:h-8'} max-w-[120px] md:max-w-[160px] w-auto object-contain transition-all duration-300 opacity-60 hover:opacity-90`}
          style={{
            filter: "grayscale(100%) brightness(0) invert(1)",
            mixBlendMode: "lighten",
          }}
        />
      ))}
    </div>
  );
};

export default SocialProof;
