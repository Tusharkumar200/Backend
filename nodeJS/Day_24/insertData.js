const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = db.insertMany(
        [{
            "owner": "Technical Thapa",
            "channelName": "Thapa Technical",
            "subscriber": 1000000,
            "brand": "google"
        },
        {
            "owner": "Anil sidhu",
            "channelName": "code step by step",
            "subscriber": 3400000,
            "brand": "google"
        }
    ]
        
        )
}
insert();