const express = require('express');
const app = express();
const port = 3000;
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const credentials = require("./credentials.json");
const firebase = require("firebase");
const secret = require("./config.json");
const cors = require('cors')

app.use(cors())
app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', (req, res) => {
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signin', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (doc.data() === undefined) {
        res.status(200).json({ message: "Ce nom d\'utilisateur n\'existe pas !", responseType: "No content", errorType: "UserAlreadyExist" });
        return;
      }
      if (req.body.password === doc.data().password)
        res.status(200).json({
          batWing: doc.data(),
          isPotionFinished: false,
          pumpkinJuice: 0,
          secretIngredient: "",
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

app.patch('/reset', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        batWing: 0,
        isPotionFinished: false,
        pumpkinJuice: 0,
        secretIngredient: "",
        snakeVenom: 0,
        spiderLeg: 0,
        toadSlime: 0
      })
      res.status(200).json({
        batWing: 0,
        isPotionFinished: false,
        pumpkinJuice: 0,
        secretIngredient: "",
        snakeVenom: 0,
        spiderLeg: 0,
        toadSlime: 0
      });
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/spiderOne', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        spiderLeg: doc.data().spiderLeg + 1
      })
      res.status(200).json({ spiderLeg: doc.data().spiderLeg + 1, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/spiderFive', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        spiderLeg: doc.data().spiderLeg + 5
      })
      res.status(200).json({ spiderLeg: doc.data().spiderLeg + 5, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/spider', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        spiderLeg: doc.data().spiderLeg + req.body.number
      })
      res.status(200).json({ spiderLeg: doc.data().spiderLeg + req.body.number, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});


app.patch('/batOne', (req, res) => {
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

app.patch('/batFive', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        batWing: doc.data().batWing + 5
      })
      res.status(200).json({ batWing: doc.data().batWing + 5, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/bat', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        batWing: doc.data().batWing + req.body.number
      })
      res.status(200).json({ batWing: doc.data().batWing + req.body.number, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});



app.patch('/pumpkinOne', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        pumpkinJuice: doc.data().pumpkinJuice + 1
      })
      res.status(200).json({ pumpkinJuice: doc.data().pumpkinJuice + 1, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/pumpkinFive', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        pumpkinJuice: doc.data().pumpkinJuice + 5
      })
      res.status(200).json({ pumpkinJuice: doc.data().pumpkinJuice + 5, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/pumpkin', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        pumpkinJuice: doc.data().pumpkinJuice + req.body.number
      })
      res.status(200).json({ pumpkinJuice: doc.data().pumpkinJuice + req.body.number, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});


app.patch('/toadOne', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        toadSlime: doc.data().toadSlime + 1
      })
      res.status(200).json({ toadSlime: doc.data().toadSlime + 1, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/toadFive', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        toadSlime: doc.data().toadSlime + 5
      })
      res.status(200).json({ toadSlime: doc.data().toadSlime + 5, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/toad', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        toadSlime: doc.data().toadSlime + req.body.number
      })
      res.status(200).json({ toadSlime: doc.data().toadSlime + req.body.number, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});


app.patch('/snakeOne', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        snakeVenom: doc.data().snakeVenom + 1
      })
      res.status(200).json({ snakeVenom: doc.data().snakeVenom + 1, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/snakeFive', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        snakeVenom: doc.data().snakeVenom + 5
      })
      res.status(200).json({ snakeVenom: doc.data().snakeVenom + 5, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/snake', (req, res) => {
  try {
    db.collection(dbCollection).doc(req.body.username).get().then((doc) => {
      if (!checkConnexion(doc.data(), res))
        return;
      db.collection(dbCollection).doc(req.body.username).update({
        snakeVenom: doc.data().snakeVenom + req.body.number
      })
      res.status(200).json({ snakeVenom: doc.data().snakeVenom + req.body.number, responseType: "Success", errorType: null })
    })
  } catch (error) {
    internalError();
  }
});

app.patch('/secretIngredient', (req, res) => {
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


app.listen(port, () => {
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