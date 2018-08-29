// то же самое, что в таймере, но вручную по команде /give_ero
import variables from '../../variables/variables'
import takePhotoFromBuffer from '../../functions/takePhotoFromBuffer'
import adminCheck from '../../functions/adminCheck';

let bot = variables.bot

export default function ero_give_img() {
    bot.onText(/\/ero_give_img/, (msg) => {
        if (adminCheck(msg) != true) return

        takePhotoFromBuffer("./data/eroTimer/ero.txt", msg.chat.id, true)
    });
} 