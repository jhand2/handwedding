import pyrebase

config = {
    "apiKey": "AIzaSyCKg7Po2Q0vOvR5M2uiQzvYYJPvBjZqPXY",
    "authDomain": "handwedding-732a5.firebaseapp.com",
    "databaseURL": "https://handwedding-732a5.firebaseio.com",
    "projectId": "handwedding-732a5",
    "storageBucket": "handwedding-732a5.appspot.com",
    "messagingSenderId": "1038279836207"
}

firebase = pyrebase.initialize_app(config)

class Firebase:
    def __init__(self):
        self.auth = firebase.auth()
        self.db = firebase.database()
        self.get_token()

    def get_db(self):
        return self.db

    def get_token(self):
        if hasattr(self, "user"):
            self.user = self.auth.refresh(self.user['refreshToken'])
            self.token = self.user['idToken']
        else:
            self.user = self.auth.sign_in_with_email_and_password("jhand@test.com", "admin123")
            self.token = self.user["idToken"]
        return self.token

    def refresh_token(self, f):
        def decorator(*args):
            res = None
            try:
                res = f(*args)
            except Exception as e:
                print(e)
                # Hit an error. Refresh token and try again
                self.get_token()
                res = f(*args)
            return res
        return decorator

