import { getFirestore, getDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  const db = getFirestore();

  const docRef = doc(db, "article", String(req.body.id));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.status(200).json(docSnap.data());
  } else {
    res.status(200).json(null);
  }
}
