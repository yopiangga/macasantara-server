import { getFirestore, setDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();
    const date = new Date();
    const time = date.getTime();

    const result = await setDoc(doc(db, "article", time.toString()), {
      title: req.body.title ?? "",
      tag: req.body.tag ?? "",
      description: req.body.description ?? "",
      image: req.body.image ?? "",
      time: req.body.time ?? "",
    });
    res.status(200).json("Oke Tambah");
  } else {
    res.status(200).json(null);
  }
}
