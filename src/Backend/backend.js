const {MongoClient} = require('mongodb');

const uri =
  'mongodb+srv://prajwal:praj123@eventez.fzoof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function getData(client, listingName) {
  const results = await client
    .db('EventEZ')
    .collection('Events')
    .findOne({name: listingName}, (err, result) => {});

  if (results) {
    console.log(results);
  }
  main().catch(console.error);
}
