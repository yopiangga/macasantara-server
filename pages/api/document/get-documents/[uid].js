import { getFirestore, getDocs, collection } from "firebase/firestore";

export default async function handler(req, res) {
  const { uid } = req.query;
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "document"));

  const data = [];

  docSnap.forEach((doc) => {
    if(doc.data().uid === uid)
        data.push({ id: doc.id, data: doc.data() });
  });

  res.status(200).json(data);
}
