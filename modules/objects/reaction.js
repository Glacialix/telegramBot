import variables from '../variables/variables'
import emoji from 'node-emoji'

let bot = variables.bot
let E_thumbsup = emoji.get(':+1:')
let E_thumbsdown = emoji.get(':-1:')

class reaction {
    title = ''
    id = ''
    votes = []
    answers = [E_thumbsup, E_thumbsdown]
    buttons = []

    constructor(title, id) {
        this.title = title
        this.id = id
    }

    make_reaction(msg, chatId) {
        let sendTo = chatId || msg.chat.id

        let buttonArray = []
        for (let i = 0; i < this.answers.length; i++) {
            this.votes[i] = 0
            let buttonObjBlank = {
                text: `${this.answers[i]} ${this.votes[i]}`,
                callback_data: 'reaction_'+this.id+'_'+i
            }
            buttonArray.push(buttonObjBlank)
        }
        this.buttons.push(buttonArray)


        let options = {
            parse_mode = 'Markdown',
            reply_markup: JSON.stringify({
                inline_keyboard: this.buttons
            })
        }
        
        bot.sendMessage(sendTo, this.title, options)
    }

    update_reaction(msg) {
        let messageId = msg.message.message_id
        let chatId = msg.message.chat.id

        this.buttons = []
        let buttonArray = []
        for (let i = 0; i < this.answers.length; i++) {
            let buttonObjBlank = {
                text: `${this.answers[i]} ${this.votes[i]}`,
                callback_data: 'reaction_'+this.id+'_'+i
            }
            buttonArray.push(buttonObjBlank)
        }
        this.buttons.push(buttonArray)

        let options = {
            reply_markup: JSON.stringify({
                parse_mode = 'Markdown',
                inline_keyboard: this.buttons
            })
        }

        bot.editMessageText(this.title, {
            message_id: messageId,
            chat_id: chatId,
            reply_markup: options.reply_markup
        })
    }
}

export default reaction