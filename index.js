import help from './modules/bot_commands/help'
help()
import echo from './modules/bot_commands/echo'
echo()
import id from './modules/bot_commands/id'
id()
import send_to from './modules/bot_commands/send_to'
send_to()
import send_photo from './modules/bot_commands/send_photo'
send_photo()
import remind_me from './modules/bot_commands/remind_me'
remind_me()
import pass_gen from './modules/bot_commands/pass_gen'
pass_gen()
import roll from './modules/bot_commands/roll'
roll()
import talk_with_bot from './modules/bot_commands/talk_with_bot'
talk_with_bot()
import set_ero_timer from './modules/bot_commands/set_ero_timer'
set_ero_timer()
import stop_ero_timer from './modules/bot_commands/stop_ero_timer'
stop_ero_timer()
import how_much_ero from './modules/bot_commands/how_much_ero'
how_much_ero()
import add_more_ero from './modules/bot_commands/add_more_ero'
add_more_ero()
// import give_ero from './modules/bot_commands/give_ero'
// give_ero()
import bot_settings from './modules/bot_commands/settings'
bot_settings()
import upload from './modules/bot_commands/upload'
upload()
import upload_en_dis from './modules/bot_commands/upload_en_dis'
upload_en_dis()
import convert from './modules/bot_commands/convert'
convert()

let devMode = true
import botInit from './modules/functions/botInit'
botInit(devMode)
if(devMode) {
    import chatbox_init from './modules/bot_commands/chatbox_init'
    chatbox_init()
    import chatbox_end from './modules/bot_commands/chatbox_end'
    chatbox_end()
    import chatbox_info from './modules/bot_commands/chatbox_info'
    chatbox_info()
    import botTransit from './modules/functions/botTransit' 
    botTransit()
}