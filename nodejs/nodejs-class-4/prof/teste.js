class Funcionario {}
class Gerente extends Funcionario {}
class Diretor extends Gerente {}
f = Funcionario() // 5
f = new Gerente() // 6
b = f instanceof Diretor // 7