export default function () {
  return (
    <div className="bg-slate-700 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl">Donate to Ronnapat Srivoravilai</h1>
      <div className="mt-5 text-center">
        <span>On Buy me a coffee</span>
        <a href="https://ronnapat.com/d/buymeacoffee" target="_blank">
          <center>
            <img src="/buymeacoffee.png" className="w-48 items-center" />
          </center>
        </a>
      </div>
      <div className="mt-5 text-center">
        <span>On Patreon</span>
        <a href="https://ronnapat.com/d/patreon" target="_blank">
          <center>
            <img src="/Patreon.png" className="w-48 items-center" />
          </center>
        </a>
      </div>
    </div>
  );
}
