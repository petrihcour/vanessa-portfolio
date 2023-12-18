import React from "react";
import home from "../images/home.jpeg";

//  small photo, name, class, level, subclass (software developer), brief introduction
// possible stats str, dex, wis, cha, int, con as buttons to click to read details below. (unsure about this part)

function Home() {
  return (
    <div className="p-3">
      <img
        src={home}
        alt="AI representation of Vanessa"
        className="w-50 rounded-circle float-start border border-secondary-subtle p-2"
      />
      <div className="">
        <h1>Character Info</h1>
        <p>Name: Vanessa</p>
        <p>Race: Human </p>
        <p>Class: Sorcerer</p>
        <p>Background: Full-Stack Software Developer</p>
        <p>Alignment: Chaotic Creative</p>
        <p>
          Greetings, enchanting minds and seekers of mystical knowledge! I am
          Vanessa, a sorceress of software development, weaving a tale born from the arcane arts of retail cross-functional management. Hailing from
          the fiery state of Texas, my journey pulsates with the rhythm of arcane
          code and the alluring dance of enchanted applications.
        </p>
        <p>
          In the labyrinth of discovery, I found my true passion - the realms of magical technology.
          Embracing this path, I ventured into forgotten tomes and workshops,
          where the echos of ancient spells harmonized with the hum of magic and
          machinery. My quest unfolded with clarity - to weave the threads of magic and technology together, crafting spells that would simplify life for all.
          Enchanted applications, intricately woven with code, now dance through
          the digitial ether, casting spells to simplify daily tasks and sparking a magical
          technological revolution.
        </p>
        <p>
          So, dear companions, join me on this fantastical journey as I weave
          spells that seamlessly intertwine tradition and innovation. Each line of code
          carries the weight of magical incantations, creating a harmonious blend
          where magic and techology coexist in a dance of endless possibilities. Together, let's embark on an enchanting adventure, conjuring a better world for all who dare to dream.
        </p>
      </div>
    </div>
  );
}

export default Home;
