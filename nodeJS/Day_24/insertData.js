const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = db.insertOne(
        {
            "owner": "Technical Thapa",
            "channelName": "Thapa Technical",
            "subscriber": 1000000,
            "brand": "google"
        })
}
insert();