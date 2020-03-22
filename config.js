require('dotenv').config()
module.exports = {
    consumer_key_pt: process.env.CONSUMER_KEY_PT,
    consumer_secret_pt: process.env.CONSUMER_SECRET_PT,
    access_token_pt: process.env.ACCESS_TOKEN_PT,
    access_token_secret_pt: process.env.ACCESS_TOKEN_SECRET_PT,
    consumer_key_en: process.env.CONSUMER_KEY_EN,
    consumer_secret_en: process.env.CONSUMER_SECRET_EN,
    access_token_en: process.env.ACCESS_TOKEN_EN,
    access_token_secret_en: process.env.ACCESS_TOKEN_SECRET_EN,
    can_i_leave: process.env.CAN_I_LEAVE
}
