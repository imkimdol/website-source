import './GameDevInfo.css';
import InfoCard from './InfoCard';

export default function GameDevInfo() {
  return (
    <div className="innerPanel gameDevInfo">
      <h2>Game Development</h2>
      <div className="cardsOuter">
        <div className="cards">
          <InteractiveWebsite />
          <RhythmGamePrototype />
          <UnwateredCrops />
          <FuturePlans />
        </div>
      </div>
    </div>
  );
}

function InteractiveWebsite() {
  return (
    <InfoCard
      title="Interactive Website"
      image="/images/interactive.png"
      desc="The interactive portion of this website is built with Godot Engine. It is designed to be a engaging way to learn about my work and my passions."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/website-source" }] }
    />
  );
};

function RhythmGamePrototype() {
  return (
    <InfoCard
      title="Rhythm Game Prototype"
      image="https://github.com/imkimdol/rhythm-game-prototype/blob/main/example.png?raw=true"
      desc="A prototype for a basic rhythm game. Built with Godot Engine and created for the UBC Game Dev club."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/rhythm-game-prototype" }] }
    />
  );
};

function UnwateredCrops() {
  return (
    <InfoCard
      title="Unwatered Crops"
      image="https://github.com/imkimdol/UnwateredCrops/blob/main/example.png?raw=true"
      desc="A Stardew Valley mod that notifies players of unwatered crops when leaving the farm."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/UnwateredCrops" }] }
    />
  );
};

function FuturePlans() {
  return (
    <InfoCard
      title="Future Plans"
      image={null}
      desc="Harper will continue to work on his game development and modding skills.
            He plans to create more mods for his favourite games such as Celeste, Stardew Valley, Rimworld, Minecraft, and more.
            There are also some small games that are in-progress, so please stay tuned!"
      buttons={[]}
    />
  );
};