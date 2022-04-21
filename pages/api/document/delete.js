import { getFirestore, deleteDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();

    const docRef = doc(db, "document", id);
    const result = await deleteDoc(docRef);

    if (result) {
      res.status(200).json({ data: "success" });
    } else {
      res.status(200).json({ data: "fail" });
    }
  } else {
    res.status(200).json(null);
  }
}
