const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

router.get('/', (req, res) => {
    return res.status(200).send('groups');
  });

// Create a Group
router.post('/create', (req, res) => {
  (async () => {
      try {
        await db.collection('groups')
            .add({ 
              title: req.body.title,
              emoji: req.body.emoji,
              color: req.body.color,
              members: req.body.members,
              topics: req.body.topics,
              private: req.body.private,
              favorited: req.body.favorited
            });
        return res.status(200).send("Group Created: " + req.body.title);
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
});

// Update
// Invite a new member
router.put('/addMember/:id', (req, res) => {
(async () => {
  try {
    // searches in group, then locates title of specific group
      const document = db.collection('groups').doc(req.body.title);
  
      const targetGroup = await document.get();
      // grab existing members
      const existingMembers = targetGroup.data().members;
      console.log("members: " + JSON.stringify(existingMembers));
      // update members
      existingMembers.push(req.params.id);
      console.log("updated  Members: " + existingMembers);
      await document.update({
          members: existingMembers
      });
      return res.status(200).send("Member: " + req.params.id + " added!");
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
  })();
});

// Send link to users phone for members to accept invite?

// Display only members
router.get('/test', (req, res) => {
  (async () => {
    try {
      // searches in group, then locates title of specific group
        const document = db.collection("groups").doc("Tu's Group");
        const tu = await document.get();
        if(!tu.exists) {
          console.log("does not exist");
        } else {
          console.log("Document Data: " + JSON.stringify(tu.data().color));
        }
        // grab existing members
        let existingMembers = document.members;
        console.log("members: " + existingMembers);
        // update members
        // let updatedMembers = existingMembers.push(req.params.id);
        
        return res.status(200).send(document);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
  });

module.exports = router; 
