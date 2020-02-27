from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

def send_hospital_number(name,hospital_no,receiver):
    subject = "Eafya Kenya health "
    sender = 'emmanuelthedeveloper@gmail.com'

    text_content = render_to_string('email/h.txt',{"name":name,"hospital_no":hospital_no})
    html_content = render_to_string('email/h.html',{"name":name,"hospital_no":hospital_no})

    msg = EmailMultiAlternatives(subject,text_content,sender,[receiver])
    msg.attach_alternative(html_content,'text/html')
    msg.send()
def send_periodic_email(name):
    subject = "EAFYA KENYA "
    sender = "emmanuelthedeveloper@gmail.com"

    text_content = render_to_string('email/p.txt',{"name":name})
    html_content = render_to_string('email/p.html',{"name":name})

    msg = EmailMultiAlternatives(subject,name,[receiver])
    msg.attach_alternative(html_content,'text/html')

    mmsg.send()