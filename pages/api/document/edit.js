import { getFirestore, updateDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();

    return await updateDoc(doc(db, "document", req.body.id), {
      text: req.body.text ?? "",
      job_id: req.body.job_id ?? "",
    });
  } else {
    res.status(200).json(null);
  }
}
