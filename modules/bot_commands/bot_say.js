import variables from '../variables/variables'
import authCheck from '../functions/authCheck'
// import speechFromText from '../functions/speechFromText'
import voiceMesManager from '../objects/voiceMesManager'

let bot = variables.bot

export default function bot_say() {
    bot.onText(/!скажи (.+)/, (msg, match) => {
        if (authCheck(msg) != true) return

        let text = match[1];
        let speaker = variables.yandexSpeaker

        // speechFromText(text, speaker).then((path) => {
        //     bot.sendVoice(msg.chat.id, path)
        // })

        voiceMesManager.speechFromText(text, speaker).then((path) => {
            bot.sendVoice(msg.chat.id, path)
        })
    });
} 