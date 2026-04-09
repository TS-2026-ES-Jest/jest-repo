const Usuario = require("../../src/model/Usuario");
const Livro = require("../../src/model/Livro");
const ServicoEmprestimo = require("../../src/service/ServicoEmprestimo");

const casos = require("../data/emprestimo.json");

describe("Emprestimo", () => {

    test('Testa usuário inválido e livro válido', () => {
        // Arange
        const usuario = new Usuario({ id: 1, nome: 'User 1', ativo: true, emprestimosAtivos: 4, multaPendente: 0 });
        const livro = new Livro({ id: 1, titulo: 'Livro 1', disponivel: true });

        // Act
        const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);

        // Assert
        expect(saida).toBe(false);
    })

    test.each(casos)("$descricao", (caso) => {
        // Arange
        const usuario = new Usuario({ ativo: caso.ativo, emprestimosAtivos: caso.emprestimosAtivos, multaPendente: caso.multaPendente});
        const livro = new Livro({disponivel: caso.disponivel});

        // Act
        const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);

        // Assert
        expect(saida).toBe(true);
    })
});