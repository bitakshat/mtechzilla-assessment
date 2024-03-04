import AppCard from "./components/AppCard/AppCard"
import { FaGithub } from "react-icons/fa"
import { PiTimerBold } from "react-icons/pi"

export const App = () => (
  <div className="App w-full h-screen bg-gradient-to-r font-poppins text-white" style={{ backgroundImage: 'url("https://source.unsplash.com/purple-and-pink-lights-X8o-P23flgI")' }}>
    <div className="w-full h-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-center text-4xl bg-gradient-to-r from-blue-100 to-green-100 inline-block text-transparent bg-clip-text tracking-widest">MTechZilla Assessment</h1>

      {/* loading assignments cards here */}
      <div className="w-full flex justify-center items-center gap-10">
        {/*Card for Github User UI */}
        <div className="w-1/4 h-96 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <AppCard title={cardDetails.gui.title} description={cardDetails.gui.desc} path="githubuserui" icon={cardDetails.gui.icon} />
        </div>
        {/*Card for Pomodoro timer */}
        <div className="w-1/4 h-96 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <AppCard title={cardDetails.pomodoro.title} description={cardDetails.pomodoro.desc} path="pomodorologin" icon={cardDetails.pomodoro.icon} />
        </div>
      </div>
    </div>
  </div>
)

let cardDetails = {
  gui: {
    title: "Github User UI",
    desc: "A card UI with users Github public information",
    icon: <FaGithub />,
  },
  pomodoro: {
    title: "Pomodoro Timer",
    desc: "A Pomodro timer app",
    icon: <PiTimerBold />,
  },
}
