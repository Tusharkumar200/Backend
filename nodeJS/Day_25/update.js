const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        {owner: "Anil sidhu"}, {
        $set: {
            owner: "Thapa Technical",
            channelName: "technical thapa"
        }

    });
    console.log(result);
}
updateData();