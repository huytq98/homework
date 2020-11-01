import Document from "./Document";
export default class DocumentCase{
    id;
    name;
    documents;
    owner;
    dateModified;
    constructor(name, owner) {
        this.id = uuid.v4();
        this.name = name;
        this.owner = owner;
        this.documents = [];
        this.dateModified = new Date().toISOString();
    }

    addDocument(document){
        // this.documents.push(document);
        if(document instanceof Document){
            this.documents.push(document)
        }else {
            console.log('something else')
        }
    }

    findDocument(name){
       /* let result = [];
        for (let document of this.documents){
            if (document.name === name){
                result.push(document)
            }
        }
        return result;*/

        let result = this.documents.filter(function (document){
            return document.name === name;
        })
        return result;
    }
    showDocument(){
        this.documents.forEach(function (document){
            console.log(document.info);
        })
    }
    deleteDocument(id){
        /*let foundIndex = -1;
        for (let i = 0; i < this.documents.length; i++){
            if (this.documents[i].id === id){
                foundIndex = i;
            }
        }*/
        //findIndex tra ve -1
        let foundIndex = this.documents.findIndex(function (document){
            return document.id === id;
        })
        if (foundIndex>=0){
            this.documents.splice(foundIndex, 1);
        }
    }
    //find tra ve null
    updateDocument(id, data){
        let found = this.documents.find(function (document){
            return document.id === id;
        })
        if (found !== null){
            found.info = data;
        }
    }
}