import variables from '../variables/variables'

let bot = variables.bot
let fs = variables.fs

let uploader = {
    flag: 'enabled',
    setFlag: (msg, match) => {
        uploader.flag = match[1]
        
        let response = ''

        switch (uploader.flag) {
            case 'enabled': response = 'Загрузка файлов разрешена'; break
            case 'disabled': response = 'Загрузка файлов запрещена'; break
        }
        bot.sendMessage(msg.chat.id, response)
    },
    upload: (msg) => {
        bot.sendMessage(msg.chat.id, 'Готов загрузить файл на сервер')

        return new Promise((resolve, reject) => {
            bot.on('document', (msg) => {
                let name = msg.document.file_name
                let responseText
                let errorText

                let filePath = bot.downloadFile(msg.document.file_id, './data/download/').then(
                    (filePath) => {
                        fs.rename(filePath, './data/download/' + name, (error, data) => {
                            if (error) throw error; // если возникла ошибка
                        })
                        responseText = 'Файл успешно загружен.'
                        resolve(responseText)
                    },
                    (e) => {
                        errorText = 'Файл не загрузился, какая-то ошибка.'
                        console.log(e)
                        reject(errorText)
                    })
            })
        }).then(
            (responseText) => bot.sendMessage(msg.chat.id, responseText),
            (errorText) => bot.sendMessage(msg.chat.id, errorText)
        )
    }
}

export default uploader