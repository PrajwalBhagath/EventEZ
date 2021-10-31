const {MongoClient} = require('mongodb');

async function main() {
  const uri =
    'mongodb+srv://prajwal:praj123@eventez.fzoof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
