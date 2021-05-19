//KD
/**
 * This class poses as an abstract class. Its main purpose is to pose as a medium for communicating
 * with a firebase firestore.
 */
class DatabaseAgent{
    /**
     * <<Constructor>>
     * @param database The firebase firestore you wish to communicate with
     */
    constructor(database){
        this.database = database;
    }
    /**
     * This method is used to delete all documents within a firebase firestore collection
     * @param collection The firestore collection you wish to delete all documents from
     */
    async deleteDocuments(collection){
        this.database.collection(collection).listDocuments().then(val => {
            val.map((val) => {
                val.delete()
            })
        })
    }
    /**
     * This methods pulls the content from a firebase collection. The data within each document in the
     * collection will be stored as an element of the returned array.
     * @param collection The firestore collection the data will be pulled from
     * @returns An array with each element corresponding to a document from the firebase collection
     */
    async getDocuments(collection){
        const snapshot = await this.database.collection(collection).get()
        return snapshot.docs.map(doc => doc.data());
    }
    /**
     * This method saves a piece of data as a new document within a firebase firesotre collection
     * @param data The data that wil be added as a new document to the firestore collection
     * @param collection The collection to which data will be addded to.
     */
    async saveDocument(data, collection){
        this.database.collection(collection).add({
            data: data
        })
    }
}

module.exports = {DatabaseAgent};