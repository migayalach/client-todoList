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
holiSq123
Hosting URL: https://mytodolist-42282.web.app


<!-- NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBfMG-MJiq5nv23baoZNYX_kH6mpxNJOhk
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=mytodolist-42282.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=mytodolist-42282
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=mytodolist-42282.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=109484381607
NEXT_PUBLIC_FIREBASE_APP_ID=1:109484381607:web:fee9053278f1fc3f469282
NEXT_PUBLIC_FIREBASE_MEASUREMENTID=G-6ZF1K0YY4M
NEXT_PUBLIC_SITE_KEY=6LcTaJYrAAAAABzok27EagxDJMbfP0VpEh4J97VA
NEXT_PUBLIC_SECRET_KEY=6LcTaJYrAAAAAJGff563DAC7Mq04Q_-P19gOkRSL -->
