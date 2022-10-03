import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = React.useState([])
  const [yourBots, setYourBots] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }, []);

  const addBot = (bot) => {
    if (!yourBots.includes(bot)) {
      setYourBots([...yourBots, bot])
    }
  }

  const removeBot = (bot) => {
    setYourBots(yourBots.filter((yourBot) => yourBot.id !== bot.id))
  }

  return (
    <div>
      <YourBotArmy bots={yourBots} removeBot={removeBot} />
      <BotCollection bots={bots} botFunction={addBot} />
    </div>
  )
}

export default BotsPage;