class DatabaseAgent{
    constructor(database){
        this.database = database;
    }

    async deleteDocuments(collection){
        this.database.collection(collection).listDocuments().then(val => {
            val.map((val) => {
                val.delete()
            })
        })
    }

    async getDocuments(collection){
        const snapshot = await this.database.collection(collection).get()
        return snapshot.docs.map(doc => doc.data());
    }

    async saveDocument(data, collection){
        this.database.collection(collection).add({
            data: data
        })
    }
}

module.exports = {DatabaseAgent};