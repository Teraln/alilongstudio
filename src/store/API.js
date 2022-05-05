import { getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase.js";

class API {
  //DATA TEMPLATES
  worksTemplate() {
    return {
      title: null,
      imageURL: null,
      paragraph: null,
      link: null,
    };
  }

  //READ
  async getData(col) {
    const querySnapshot = await getDocs(collection(db, col));
    const fbData = [];
    querySnapshot.forEach((doc) => {
      const dataWithID = Object.assign(doc.data(), { id: doc.id });
      fbData.push(dataWithID);
    });
    /* console.log(fbData); */
    return fbData;
  }
}

export default new API();
