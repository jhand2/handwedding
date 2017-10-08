from .firebase import Firebase

fb = Firebase()

class RsvpController:
    def __init__(self):
        self.db = fb.get_db()

    @fb.refresh_token
    def add_rsvp(self, record):
        res = self.db.child("rsvp").push(record, fb.token)
        print(res)
        return res
