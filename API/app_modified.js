const express = require('express');
const app_modified = express();
const port = 3000;
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const credentials = require("./credentials.json");
const firebase = require("firebase");
const secret = require("./config.json");
const cors = require('cors')

app_modified.use(cors())
app_modified.use(express.json());

require("firebase/firestore");


firebase.initializeApp({
  apiKey: credentials.apiKey,
  authDomain: credentials.authDomain,
  projectId: credentials.projectId,
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://atelier-halloween-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = firebase.firestore();
const dbCollection = "Halloween";

app_modified.get('/', (req, res) => {
  res.send('Hello World!')
})

app_modified.post('/signup', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!(doc.data() === undefined)) {
        res.status(403).json({ message: "Ton nom d\'utilisateur est déjà pris !", responseType: "Forbidden", errorType: "AlreadyCreated" });
        return;
      }
      db.collection(dbCollection).doc(req.body.username).set({
        batWing: 0,
        isPotionFinished: false,
        password: req.body.password,
        pumpkinJuice: 0,
        secretIngredient: "",
        snakeVenom: 0,
        spiderLeg: 0,
        toadSlime: 0
      })
      res.status(201).json({ message: "Done.", responseType: "Created", errorType: null })
    })
  } catch (error) {
    internalError();
  }

});

app_modified.get('/', (req, res) => {
  res.send('Hello World!')
})

app_modified.post('/signin', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (doc.data() === undefined) {
        res.status(401).json({ message: "Ce nom d\'utilisateur n\'existe pas !", responseType: "No content", errorType: "UserAlreadyExist" });
        return;
      }
      if (req.body.password === doc.data().password)
        res.status(200).json({
          ingredients: doc.data(),
          isPotionFinished: false,
          pumpkinJuice: 0,
          secretIngredient: "",
          batWing: 0,
          snakeVenom: 0,
          spiderLeg: 0,
          toadSlime: 0
        });
      else
        res.status(200).json({ message: "Mot de passe invalide !", responseType: "No content", errorType: "WrongPassword" });
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "_______" : ________,
        isPotionFinished: false,
        "_______" : ________,
        secretIngredient: "",
        "_______" : ________,
        "_______" : ________,
        "_______" : ________
      })
      res.status(200).json({
        "_______" : ________,
        isPotionFinished: false,
        "_______" : ________,
        secretIngredient: "",
        "_______" : ________,
        "_______" : ________,
        "_______" : ________
      });
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "______": doc.data().spiderLeg + _______
      })
      res.status(200).json({ "______": doc.data().spiderLeg + _______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "______": doc.data().spiderLeg + ______
      })
      res.status(200).json({ "______": doc.data().spiderLeg + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        spiderLeg: doc.data().spiderLeg + req.body._______
      })
      res.status(200).json({ spiderLeg: doc.data().spiderLeg + req.body._______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});


app_modified.patch('______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        batWing: doc.data().batWing + 1
      })
      res.status(200).json({ batWing: doc.data().batWing + 1, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('_______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "______": doc.data().______ + ______
      })
      res.status(200).json({ "______": doc.data().______ + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('_______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "______" : doc.data().______ + req.body.______
      })
      res.status(200).json({ "______": doc.data().______ + req.body.______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});



app_modified.patch('_______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "______": doc.data().______ + ______
      })
      res.status(200).json({ ______: doc.data().______ + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "______": doc.data().______ + ______
      })
      res.status(200).json({ ______: doc.data().______ + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        "______": doc.data().______ + req.body.______
      })
      res.status(200).json({ "______": doc.data().______ + req.body.______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});


app_modified.patch('/toadOne', (req, res) => {
  try {
    db.collection(______).doc(req.body.______).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(______).doc(req.body.______).update({
        "______": doc.data().______ + ______
      })
      res.status(200).json({ "______": doc.data().______ + 1, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('/toadFive', (req, res) => {
  try {
    db.collection(______).doc(req.body.______).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(______).doc(req.body.______).update({
        "______": doc.data().______ + ______
      })
      res.status(200).json({ "______": doc.data().______ + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('/toad', (req, res) => {
  try {
    db.collection(______).doc(req.body.______).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(______).doc(req.body.______).update({
        "______": doc.data().______ + req.body.______
      })
      res.status(200).json({ "______": doc.data().______ + req.body.______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});


app_modified.patch('______', (req, res) => {
  try {
    db.collection(______).doc(______).get().then((doc) => {
      if (!checkConnexion(______, ______))
        return;
      db.collection(______).doc(______).update({
        "______": ______ + ______
      })
      res.______(200).json({ "______": ______ + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(______).doc(______).get().then((doc) => {
      if (!checkConnexion(______, ______))
        return;
      db.collection(______).doc(______).update({
        "______": ______ + ______
      })
      res.______(200).json({ "______": ______ + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('______', (req, res) => {
  try {
    db.collection(______).doc(______).get().then((doc) => {
      if (!checkConnexion(______, ______))
        return;
      db.collection(______).doc(______).update({
        "______": ______ + ______
      })
      res.______(200).json({ "______": ______ + ______, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app_modified.patch('/secretIngredient', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        secretIngredient: req.body.secret
      })
      if (isPotionFinished(doc.data(), req.body.secret, res)) {
        db.collection(dbCollection).doc(req.body.username).update({
          isPotionFinished: true
        })
      }
    })
  } catch (error) {
    internalError();
  }
});


app_modified.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function checkConnexion(user, res) {
  if (user === undefined) {
    res.status(401).json({ message: "Tu n\'est pas connecté !", responseType: "Unauthorized", errorType: "NotConnected" });
    return false;
  }
  return true;
}

function internalError(res) {
  res.status(500).json({ error: error.message, responseType: "Internal Error", errorType: "InternalError" });
}

function isPotionFinished(data, secretIngredient, res) {
  if (data.batWing === secret.batWing &&
      data.pumpkinJuice === secret.pumpkinJuice &&
      data.snakeVenom === secret.snakeVenom &&
      data.spiderLeg === secret.spiderLeg &&
      data.toadSlime === secret.toadSlime &&
      secretIngredient === secret.secretIngredient) {
    res.status(200).json({ secret: secretIngredient, isPotionFinished: true, responseType: "Success", errorType: null })
    return true
  }
  res.status(200).json({ secret: secretIngredient, isPotionFinished: false, responseType: "Success", errorType: null })
  return false
}