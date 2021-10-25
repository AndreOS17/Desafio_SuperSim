from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)
CORS(app)

User_POST_args = reqparse.RequestParser()
User_POST_args.add_argument(
    'CPF', type=str, required=True, help='User CPF is required'
)
User_POST_args.add_argument(
    'Password', type=str, required=True, help='User Password is required'
)

Users = {
    'User': {
        'CPF': '123',
        'Password': '123'
    }
}

UserLogged = ''

class Login(Resource):
    def get(self): 
        global UserLogged
        return UserLogged
    def post(self):
        args = User_POST_args.parse_args()
        for user in Users:
            if Users[user]['CPF'] == args.CPF:
                if Users[user]['Password'] == args.Password:
                    global UserLogged
                    UserLogged = user
                    return 201
                else: return {'err': 'Senha Inválida'}
        else: return {'err': 'CPF Inválido'}


EValues = [300, 600, 900, 1200, 2400, 3000]


class Emprestimos(Resource):
    def get(self):
        global EValues
        return EValues


api.add_resource(Login, '/Entrar')
api.add_resource(Emprestimos, '/')

if __name__ == '__main__':
    app.run(debug=True)