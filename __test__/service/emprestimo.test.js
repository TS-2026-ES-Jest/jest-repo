const Livro = require("../../src/model/Livro");
const Usuario = require("../../src/model/Usuario");
const ServicoEmprestimo = require("../../src/service/ServicoEmprestimo");

test('Testa usuário e livro válido', () => {
    // Arange
    const usuario = new Usuario({id: 1, nome: 'User 1', ativo: true, emprestimosAtivos: 0, multaPendente: 0});
    const livro = new Livro({id: 1, titulo: 'Livro 1', disponivel: true});

    // Act
    const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);

    // Assert
    expect(saida).toBeStrictEqual(true)
})