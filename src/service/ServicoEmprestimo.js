const constants = require('../core/constants');

class ServicoEmprestimo {

    static autorizarEmprestimo(usuario, livro) {
        return this.validarUsuario(usuario)
            && this.validarLivro(livro);
    }

    static validarUsuario(usuario) {
        if (!usuario || !usuario.ativo) return false;
        if (usuario.emprestimosAtivos > constants.LIMITE_EMPRESTIMO) return false;
        if (usuario.multaPendente > constants.LIMITE_MULTA) return false;
        return true;
    }

    static validarLivro(livro) {
        if (!livro || !livro.disponivel) return false;
        return true;
    }
}
module.exports = ServicoEmprestimo;