import { getFirestore, setDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = getFirestore();
    const date = new Date();
    const time = date.getTime();

    const result = await setDoc(doc(db, "document", time.toString()), {
      title: req.body.text ?? "",
      time: time,
      uid: req.body.uid,
      text: req.body.text,
    });
    res.status(200).json({ data: time.toString(), message: "Oke" });
  } else {
    res.status(200).json(null);
  }
}
