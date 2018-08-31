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

        let pollBlank = pollManager.createPoll(id, title, answers)
        
        let HULE_TI = pollBlank.pollObject.title
        console.log(HULE_TI)
        let options = pollBlank.options
        console.log(options)

        // let pollBlank = pollManager.createPoll(id, title, answers)
        // console.log(pollBlank)
        bot.sendMessage(msg.chat.id, HULE_TI, options)
    })
}