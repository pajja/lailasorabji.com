import React, { useEffect } from "react";
import "../styles/geoAndDecComp1.css";
import "../styles/womanhoodComp.css";
import Painting1 from "../assets/womanhood/IMG_5951_edited.jpg";
import Painting2 from "../assets/womanhood/IMG_5952_edited.jpg";
import Painting3 from "../assets/womanhood/IMG_5955_edited.jpg";
import Painting4 from "../assets/womanhood/IMG_5958_edited.jpg";
import Painting5 from "../assets/womanhood/IMG_5953_edited.jpg";
import Painting6 from "../assets/womanhood/IMG_5960_edited.jpg";

const WomanhoodComp14 = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const content = document.querySelector(".scroll-content");
    const thumb = document.querySelector(".scrollbar-thumb");

    // Helper functions to disable and enable text selection
    const disableTextSelection = () => {
      document.body.style.userSelect = "none"; // Disable text selection
      document.body.style.webkitUserSelect = "none";
      document.body.style.mozUserSelect = "none";
      document.body.style.msUserSelect = "none";
    };

    const enableTextSelection = () => {
      document.body.style.userSelect = ""; // Re-enable text selection
      document.body.style.webkitUserSelect = "";
      document.body.style.mozUserSelect = "";
      document.body.style.msUserSelect = "";
    };

    const updateThumbPosition = () => {
      const contentWidth = content.scrollWidth;
      const containerWidth = container.clientWidth;
      const scrollLeft = content.scrollLeft;

      const thumbWidth = Math.max(
        (containerWidth / contentWidth) * containerWidth,
        50
      );
      const thumbLeft = (scrollLeft / contentWidth) * containerWidth;

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.left = `${thumbLeft}px`;
    };

    content.addEventListener("scroll", updateThumbPosition);
    updateThumbPosition();

    thumb.addEventListener("mousedown", function (e) {
      disableTextSelection(); // Disable text selection on drag
      const startX = e.clientX;
      const startLeft = parseFloat(thumb.style.left);

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newLeft = Math.min(
          container.clientWidth - thumb.clientWidth,
          Math.max(0, startLeft + deltaX)
        );
        content.scrollLeft =
          (newLeft / container.clientWidth) * content.scrollWidth;
      };

      const onMouseUp = () => {
        enableTextSelection(); // Re-enable text selection when drag ends
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp, { once: true });
    });
  }, []);

  return (
    <div className="container">
      <div className="scroll-content">
        <div className="image-container-geoAndDecComp1 times-new-roman gap0">
          <div className="text-container-assemblagesComp">
            <p className="main-text times-new-roman">
              I found myself moving towards the sexualisation of women as an
              interest which was a large part of the reason I had such an
              interest in researching womanhood in the first place. This is
              shown through some of my initial research such as through reading
              Andrea Dworkin's book as well as Lucas' self portraits. Before
              going on to make prints, I wanted to ensure that I had the images
              I could make into prints so that it would go successfully when I
              did have my time in the print room. I used water colours and Quink
              ink like Dumas used in a lot of her work as I felt it a successful
              medium to be able to create simplistic yet impactful images, which
              is what I would have to do with using print inks also. I was
              preparing myself. I used red and blue as my main colour of the
              skin as it gave an eerie tone. The cold tones of the blue which
              aren't usually found in skin colours, I feel gave a nod towards a
              corpse and deadening. I did this to show how women are so
              sexualised they way as well be a corpse; lifeless, to be used and
              abused for male gain. The red was also made to be used eerily and
              to suggest violence and blood and rawness.
            </p>
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting1} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting2} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting3} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting4} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting5} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3 womanhood-6">
            <img src={Painting6} alt="shapes | futures" />
          </div>
          <div className="text-container-assemblagesComp">
            <p className="main-text times-new-roman">
              In being more provocative in my work, I did have to answer the
              question 'What is explicit art? And is this explicit?'. Although
              some may find these images sexual and inappropriate, they are not.
              At least not in the way of sex but rather depicting violence. The
              images are violent and showing violence. There is no sex going on
              here or anything seductive. It is pornography and violence rather
              than the coming together of two people with full consent. I think
              if my work was to be shown in a gallery, it should be
              inappropriate towards violence and concerning imagery rather than
              'explicit'. The landscape watercolour, I feel, was one of most
              successful and rich in context images that came out of the water
              media and biro exercise. It pictures the lifeless shell of a body
              hanging onto the frame of the chair whilst her organs and life are
              cast aside. It is a comment on the way women are only valued for
              their appearance, or their skin, whilst their aliveness, inner
              workings, heart and mind will always be a second thought. She
              might as well not even be a human or alive; she is valued for her
              appearance and, essentially, as a hole.
            </p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar">
        <div className="scrollbar-thumb">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default WomanhoodComp14;
