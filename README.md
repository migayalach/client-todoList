tsc --noEmit

BEFORE
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

AFTER CHANGE IF FOR TRUE FOR DEVELOP
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

seed fake data
miguel@miguel-HP-348-G7:~/Desktop/Projects/todoList/client$ npm run seed

return state
BEFORE
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}


ayalachavezmiguel@gmail.com
holiSq12345
Hosting URL: https://mytodolist-42282.web.app


