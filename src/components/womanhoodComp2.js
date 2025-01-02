import React, { useEffect } from "react";
import "../styles/assemblagesComp.css";
import collage from "../assets/assemblages/IMG_3314_edited.jpg";
import putTogether from "../assets/assemblages/put-together.png";

const WomanhoodComp2 = () => {
  useEffect(() => {
    const container = document.querySelector(".container-a");
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
    <div className="container-a">
      <div className="scroll-content gap">
        <div className="text-container-assemblagesComp">
          <p className="main-text times-new-roman">
            As my final major project I was debating whether to carry on my
            previous topic of Futures however, with the recent murder of Sarah
            Everard I was consumed with the topic of womanhood, woman’s
            experiences in society as a victim of patriarchy and everyday
            objectification and sexualisation. I started to research feminist
            artists and encountered Sarah Lucas. Her works of Self Portrait with
            Fried Eggs 1996 and Eating a Banana 1990 use these sexual innuendos
            to draw upon the sexualisation of women. Even through just the
            action of eating a banana or just having breasts, even if Lucas is
            posing in the most masculine way possible with legs splayed and arms
            resting on the chair, she has become sexualised by the viewer. Other
            examples, that come to mind, of everyday sexualisation from non
            sexual acts are bending over, wearing red lipstick, uniforms, high
            socks, wearing heels or just having large breasts. Lucas has been
            very interested and taken much inspiration from the Feminist Author
            Andrea Dworkin. Dworkin wrote Pornography: Men Possessing Women
            which illustrates the harms of pornography and the control that men
            have over women in sexual relationships and thus the effects this
            has on relationships in society
          </p>
        </div>
        <div className="text-container-assemblagesComp">
          <p className="main-text times-new-roman">
            Symbols and imagery have so much power with the connotations
            associated with them, especially those surrounding the taboo topic
            of sex (and gender). I think that exploring at symbols is a good
            starting point to explore themes of gender, womanhood and sex.
            Georgia O’Keefe’s work comes to mind with the associations of her
            botanical paintings with female genitals. Her work is particularly
            powerful. The vagina is such a sexual symbol that it causes
            discomfort or should be censored but the penis has such little
            relation to the actual explicit sex organ that it is that they are
            constantly the butt of jokes, drawn and doodled everywhere and used
            in casual conversation as insults. The phallic symbol is less crude
            than the vaginal. The clitoris is an even more unspoken explicit.
            O’Keefe’s work conjures up this interesting feeling of discomfort
            and disapprovement and begs the question of why do we feel this way
            when looking at a giant, possible, vagina? The shapes of the vagina
            are everywhere in nature- such as flowers and onions, so why is her
            work seen as so rude. In the time that she was painting her flowers
            would have been even more looked down upon and radical as it would
            not be proper to be drawing such sensitive and unspoken things. On
            March 8th 2020, International Women's day, a team of female artists,
            part of the Gang Du Clito, also tackled this idea of the female
            body’s censorship. They erected a large sculpture of the clitoris
            near the phallic symbol of the Eiffel tower. Their intention was to
            bring attention to the lack of education surrounding female sex in
            schools and in society. However, I feel it is an important piece of
            work in the sexualisation and objectification of women as it
            normalizes us with the female body as just a body that should be
            talked about and not taboo. Frida Khalo, in her painting of Henry
            Ford Hospital 1932 also uses images to directly tell a story of an
            important experience she has gone through as a woman. This piece has
            an image of her surrounded by images, connected to her by red
            ribbons, that bare importance to her miscarriage. One of them being
            an image of a limp orchid her husband gave her on the day and
            another being the a pink orthopaedic cast of the pelvic zone on the
            left, alluding to the fractures of Frida’s spinal column.
          </p>
        </div>
        <div className="text-container-assemblagesComp">
          <p className="main-text times-new-roman">
            Hilma Af Klint is an artist that I have looked at in the past who
            also uses symbols and imagery in her work as well as colours. She
            uses these throughout her work as a sort of code. One example of
            this is, the colour yellow is used for masculine energy and blue is
            used for feminine energy with green the unity of them both: This is
            often the colour in nature especially, the recurring image in her
            work, the Tree of Life. However, after reading the anthropological
            book The Reinvention of Humanity, my perception of gender, and
            consequently of masculine and feminine, has been completely
            deconstructed. Margret Mead explored gender and sexuality by
            visiting three tribes in Papua New Guinea and conducting
            ethnographies in which she immersed herself within the individual
            societies. She found that in one tribe, men were supposed to be
            creative whilst the women did heavy lifting tasks. In the other
            tribes, there was little difference between what is seen as
            masculine and feminine as both shared the work equally, whether it
            was nurturing children or being hunters. I thought this was an
            interesting concept that goes against Af Klint’s work as there is no
            natural universal source of masculinity or femininity; what is
            masculine here may be feminine there and what is feminine here may
            not exist as either masculine of feminine there. Therefore, even her
            work, which is seen to be very existential and spiritual, has been
            guided by society’s social constructions of gender.
          </p>
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

export default WomanhoodComp2;
