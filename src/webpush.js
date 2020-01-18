const webpush = require('web-push')

webpush.setVapidDetails(
        'mailto:pernettleonardo@gmail.com',
        process.env.PUBLIC_KEY,
        process.env.PRIVATE_KEY,
    )

module.exports = webpush