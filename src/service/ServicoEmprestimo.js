class ServicoEmprestimo{
    static autorizarEmprestimo(usuario, livro){
        
        return this.validarUsuario(usuario);
    }
    static validarUsuario(usuario){
        if(usuario != null){
            return false;
        } 

        if (usuario.ativo){
            return true;
        }

        if (usuario.emprestimosAtivos < 3){
            return true;
        }

        if (usuario.multaPendentes <= 50.00){
            return true;
        }
        
    }
    static validarLivro(livro){
        if (livro != null && livro.disponivel) {
            return true;
            
        } else {
            return false;
        }
    }
}
module.exports = ServicoEmprestimo;