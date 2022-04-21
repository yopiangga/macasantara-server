import { getFirestore, updateDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();

    return await updateDoc(doc(db, "article", req.body.id), {
      title: req.body.title ?? "",
      tag: req.body.tag ?? "",
      description: req.body.description ?? "",
      image: req.body.image ?? "",
      time: req.body.time ?? "",
    });
  } else {
    res.status(200).json(null);
  }
}
