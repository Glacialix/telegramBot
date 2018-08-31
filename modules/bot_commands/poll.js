import variables from '../variables/variables'
import authCheck from '../functions/authCheck'
import symbolStringGenerator from '../functions/symbolStringGenerator'
import pollManager from '../objects/pollManager'

let bot = variables.bot

export default function poll() {
    bot.onText(/\/poll (.+) - (.+)/, (msg, match) => {
        if (authCheck(msg) != true) return

        let id = symbolStringGenerator(15)
        let title = match[1]
        let answers = match[2].split('/')

        let pollProperties = pollManager.createPoll(id, title, answers)
        // console.log(pollProperties)
        console.log(pollProperties.pollObject.title)
        console.log(pollProperties.options)

        // let pollBlank = pollManager.createPoll(id, title, answers)
        // console.log(pollBlank)
        bot.sendMessage(msg.chat.id, pollProperties.pollObject.title, pollProperties.options)
    })
}