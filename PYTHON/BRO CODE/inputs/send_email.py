import smtplib

sender_email = "sabesqcolgate@gmail.com"
receiver_email = "luis4002a@gmail.com"
password = "lasvakitas"
subject = "Python email test"
body = "I wrote an email! :D"

# HEADER
message = f"""From: {sender_email}
To: {receiver_email}
Subject: {subject} \n
{body}"""


server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()

try:
    server.login(sender_email, password)
    print("Logged in...")

    server.sendmail(sender_email, receiver_email, message)
    print("Email has been sent!")
except smtplib.SMTPAuthenticationError:
    print("Unable to sign in")