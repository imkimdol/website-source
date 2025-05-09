import './SoftwareInfo.css';
import { InfoCard, Tags } from './InfoCard';

export default function SoftwareInfo() {
  return (
    <div className="innerPanel softwareInfo">
      <h2>Software Projects</h2>
      <div className="cardsOuter">
        <div className="cards">
          <OllamaWebUI />
          <ThisWebsite />
          <WorkpianNameBlaster />
          <TempoRubato />
          <LiVer />
          <ImageBoard />
          <DiscordBotHelpers />
          <FuturePlans />
        </div>
      </div>
    </div>
  );
};

function OllamaWebUI() {
  return (
    <InfoCard
      title="Ollama WebUI"
      image="/images/projects/ollama-webui.png"
      tags={[Tags.Nextjs, Tags.TailwindCSS, Tags.Reactjs, Tags.Nodejs, Tags.TypeScript, Tags.HTML]}
      desc="A browser-based chat client for the Ollama API. Supports message streaming, model selection, multiple chat threads, local chat storage, message editing, and more. Built to be hosted easily on local web servers."
      buttons={[
        { text: "Demo Video", url: "https://youtu.be/6f0zhikFn08" },
        { text: "GitHub", url: "https://github.com/imkimdol/ollama-webui" },
      ]}
    />
  );
};

function ThisWebsite() {
  return (
    <InfoCard
      title="Static Webpage"
      image="/images/projects/website-static.png"
      tags={[Tags.TypeScript, Tags.HTML, Tags.CSS, Tags.Reactjs, Tags.Nodejs]}
      desc="This website consists of two parts - a static webpage and an interactive game. The static section was built with Create React App. All the visuals and interactions were written from scratch in HTML (JSX) and plain CSS."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/website-source" }] }
    />
  );
};

function WorkpianNameBlaster() {
  return (
    <InfoCard
      title="Workpian Name Blaster"
      image="/images/projects/workpian-name-blaster.gif"
      tags={[Tags.TypeScript, Tags.HTML, Tags.CSS, Tags.Nodejs]}
      desc="A Chromium browser extension for censoring the most common instances of sensitive data found in UBC's Workday and Appian student information platforms. User-configurable with custom regular expressions to target specific text patterns. Built to speed up internal documentation processes."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/workpian-name-blaster" }] }
    />
  );
};

function TempoRubato() {
  return (
    <InfoCard
      title="Tempo Rubato"
      image="/images/projects/tempo-rubato.png"
      tags={[Tags.TypeScript, Tags.Discordjs, Tags.LevelDB, Tags.Nodejs]}
      desc="A Discord bot for playing music with user-defined playrates. Supports streaming, queueing, skipping, and more quality-of-life music streaming features. Built on top of Discord Player with custom FFMpeg filters for adjusting streaming rates."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/tempo-rubato" }] }
    />
  );
};

function LiVer() {
  return (
    <InfoCard
      title="LiVer"
      image="/images/projects/liver.png"
      tags={[Tags.CSharp, Tags.DotNET]}
      desc="A Windows CLI application for managing versions of Ableton Live project files. Aims to solve the time-consuming process of keeping track of changes between different song versions. Comes with management features that focuses on documentation, traceability, and version comparisons."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/LiVer" }] }
    />
  );
}

function ImageBoard() {
  return (
    <InfoCard
      title="Image Board"
      image="/images/projects/image-board.png"
      tags={[Tags.MongoDB, Tags.Expressjs, Tags.Reactjs, Tags.Nodejs, Tags.JavaScript, Tags.HTML, Tags.CSS]}
      desc="An image-posting and sharing application similar to popular social media platforms. Built using the popular MERN stack."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/image-board" }] }
    />
  );
};

function DiscordBotHelpers() {
  return (
    <InfoCard
      title="Discord Bot Helpers"
      image={null}
      tags={[Tags.TypeScript, Tags.JavaScript, Tags.Discordjs, Tags.Nodejs]}
      desc="Simple utilities to automate and simplify tasks. These projects are converted into Discord bots when the scope of the project is too small to justify a dedicated user interface."
      buttons={[
        { text: "Ollama Client", url: "https://github.com/imkimdol/discord-ollama" },
        { text: "Wake-on-LAN", url: "https://github.com/imkimdol/discord-wol" },
        { text: "Roulette", url: "https://github.com/imkimdol/discord-roulette" },
        { text: "Scheduler", url: "https://github.com/imkimdol/discord-scheduler" },
        { text: "Minecraft Server Status Checker", url: "https://github.com/imkimdol/minecraft-server-status-checker" },
      ]}
    />
  );
};

function FuturePlans() {
  return (
    <InfoCard
      title="Future Plans"
      image={null}
      tags={[Tags.CPP, Tags.JUCE, Tags.CSharp, Tags.WinUI, Tags.Swift, Tags.SwiftUI, Tags.AWS]}
      desc="Harper has a handful of new project ideas in the works.
            He plans to write utility VST plugins for faster music production workflows, build an app for university students, and work with cloud services to remotely host his bots.
            A whole rework of LiVer with new features, a GUI, and native support for Windows and MacOS is planned as well."
      buttons={[]}
    />
  );
};