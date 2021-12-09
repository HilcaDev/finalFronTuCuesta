export interface Encuestas {
  id:                  string;
  fecha:               string;
  votoscandidato1:     number;
  votoscandidato2:     number;
  candidato1:          Candidato;
  candidato2:          Candidato;
  usuario:             Usuario;

}

export interface Candidato {
  id?:     string;
  nombre: string;
}

export interface Usuario {
  id:       string;
  nombre:   string;
  correo:   string;
  username: string;
  password?: string;
  hash?:     string;
}
