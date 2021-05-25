import admin,{ ServiceAccount } from "firebase-admin"
import serviceAccount from "../../firebase-admin.json"

export function init(){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount )
    })
}

export async function fetch(appId:string){
    const db = admin.firestore()
    const citiesRef = db.collection(appId);
    return await citiesRef.get();
}

init()