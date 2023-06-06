import requests
import json
from flask import Flask, request, jsonify

def get_answer(text):
    data_send = { 
        'query': text,
        'lang': 'ko',
    }

    data_header = {
        'Authorization': 'nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCt2mCdVwIJx+od\nCL2l8HFeGSd0+q67RmL2TBUSkDKW0Z6RTmVIW81ZxiU/n3DN35WJEOOPSuPNrdM7\ny+ZSOO/om5cyZxej6BRVf2IfdGKYijpVvxWueImfAaCBQCbRO4hAoAlFF7ni+g3g\nlQlTHLMn7rnKubY0DCi116cOKx6DVa33zpw+eKr6t8EWtHBDihx/ilgSZfRoqdm6\nIEE4R+14nMailXryhOvNL8rdwemnrkcy1SZ6AZ8bgZSa3fe8awryfVDAfl0EcmKd\nwn0bQFWGNkcbHOXooMgJ1gWp8sftriaF002koyEFi1BaryGu5//PskFqPZt3aiFj\nLZuidrMHAgMBAAECggEAUaUYMVvuo5xEiG0V70uLWgcTHh8qFt331LYnQUgB0g1Q\nW+oGq6QdPJdO3+GnTq+9IJkTXTRs5idHZ7IakKuXk1QaffunQPzZK8u+T4pPUVa9\nDY7HBmAqNUfE0l5HvIQqOTtPDykUzZDkGn+zWNpGEq9MhnWPqUK6jadgl0lNs5wt\n4zngBtjdd/tYiNs3BLvgKhD6w3/UuXTLCQKZriH8o6E1YR+a6D97fTUmSJbMb4Nk\neEYXz7A/piOlPwJm5UTK2RiJf1elKdr/+tmgWCM5lZ9hji4NW81OIOo1ltwpHvWx\nBPaRxGLF1Lx9E11rPBkJeWNKTruESdvN6f4wUWb3YQKBgQDv8rTCMvoJcYa0BqnO\nq/ESWYokIrqJoNPxfL0RoIbnMMQGVaw1U1TSkeK1GJi5a2EKvyVOREOOLk/HIMWy\njv5sF6epNsM6INZ40L/W1Fi+fhvqC7H+IVs/WLqZRPWE/mBQoPPsmdamzl/Ck4UF\n7Q3p+eVZAXhR7VjE3lvpakugYQKBgQC5e75O+FPHh1A2oQbCpbwXb8HjOZa6ncSx\nkqsZhymvSMAcFp8NYvsMz8fGu5cy76z8eXRp1tPzlii+3IBEnVR2+vrDbKA+sgRk\n42ri2VFJPsSCnluEZzM4BBhFXOCdgHNaXIkNHcZ/0UQ79ASgtD71WLpoUuV6EgM5\nHJ4S00isZwKBgFZtf7prjjCUmcaCl+t/d2f6pI17jOFB8tWK7rdIsQ7ZO+JkPZE/\noM/wCE7euzQef2fVjeRxJjwyZj39ifhVFUNuCdAjj5KCfX4rAs6o0gZbekaFS+mT\nrkBU/3Fxq1XqIlsofnP8vZp7v3ZgmIuX5WkfwAKdSu+HpG/VABpFVVRBAoGAEpVJ\nPdQ3YJg3+yEq8jl0nMx/mmpcpZnE6R2OsuIN1Rfu12GU0dyG1oPCujB1N483v5vT\ng/8YASGcN3MUDsvMeJcwpH+vllhzhEAcp1mqgTIesg93j85fHU+btudVQbJq3DTF\nLmE7T/cBZRhPlmI4pJAdLPKRNyey1vf9BlnQwCUCgYEAsxirEAcfkdsqJ7CDghvB\nsF7T/39Rl5ievBjeGeEyKPfCIwxlE8kair5We8VzRWUgDWvFmlY3L35MCpOEcnNb\n+Yr86nINaEsqBTUlY8KRv6naKRtGXmNKoL3z7nqxVOfaeFvXeahgXIF1yx89QS7q\n3dKA3IsLsgHDBYjOEm3VnaY=',
        'Content-Type': 'application/json; charset=utf-8'
    }

    dialogflow_url = 'https://dialogflow.googleapis.com/v2/projects/forkids-mrsf/agent/sessions/123456789:detectIntent'

    res = requests.post(dialogflow_url, data=json.dumps(data_send), headers=data_header)

    if res.status_code != requests.codes.ok:

        return '오류가 발생했습니다.'

    data_receive = res.json()

    answer = data_receive['result']['fulfillment']['speech'] 

    return answer


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route('/', methods=['POST', 'GET'])
def webhook():
    content = request.args.get('content')
    return get_answer(content)

if __name__ == '__main__':
    app.run(host='0.0.0.0') 
