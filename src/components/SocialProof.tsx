import lightlabsLogo from "@/assets/logos/lightlabs_logo.png";
import tenortherapyLogo from "@/assets/logos/tenortherapy_logo.png";
import webdoxLogo from "@/assets/logos/webdox_logo.png";
import samsaraLogo from "@/assets/logos/samsara_logo.png";

const logos = [
  { src: lightlabsLogo, alt: "Light Labs" },
  { src: tenortherapyLogo, alt: "Tenor Therapy" },
  { src: webdoxLogo, alt: "Webdox" },
  { src: samsaraLogo, alt: "Samsara" },
];

const SocialProof = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300 opacity-60 hover:opacity-100"
          style={{
            filter: "grayscale(100%) brightness(200%)",
          }}
        />
      ))}
    </div>
  );
};

export default SocialProof;
