export default interface IContato {
    nome: string,
    detalhes: Array<String>
}

export interface ILista {
    categoria: string,
    contatos: Array<IContato>
}

export const lista = new Array<ILista>(
    {
        categoria: 'Obstetrícia',
        contatos: [
            {
                nome: 'Juliano Simões',
                detalhes: ['Clínica Pro Femina - (79) 3246-5969']
            },
            {
                nome: 'Caroline Marques',
                detalhes: ['Hospital Primavera - (79) 2105-2600', 'Decós Day Hospital - (79) 3025-8300']
            }
        ]
    },
    {
        categoria: 'Cirurgia ginecológica',
        contatos: [
            {
                nome: 'Marcos Araújo',
                detalhes: ['Hospital Primavera - (79) 2105-2600', 'Clínica Pro Femina - (79) 3246-5969']
            },
            {
                nome: 'Marina Nogueira',
                detalhes: ['Hospital Primavera - (79) 2105-2600']
            }
        ]
    },
    {
        categoria: 'Uroginecologia',
        contatos: [
            {
                nome: 'Caroline Marques',
                detalhes: ['Hospital Primavera - (79) 2105-2600']
            },
            {
                nome: 'Daniela Prado',
                detalhes: ['Clínica Santa Helena - (79) 98806-0296 / 99113-8142']
            }
        ]
    },
    {
        categoria: 'Mastologia',
        contatos: [
            {
                nome: 'Luciana Machado',
                detalhes: ['Hospital Primavera - (79) 2105-2600', 'Climedi - (79) 2107-9800']
            },
            {
                nome: 'Juliano Simões',
                detalhes: ['Clínica Pro Femina - (79) 3246-5969']
            }
        ]
    },
    {
        categoria: 'Endocrinologia',
        contatos: [
            {
                nome: 'Thaís Paias',
                detalhes: ['Centro Médico Jardins - (79) 3025-6162 / 99926-6162']
            },

        ]
    },
    {
        categoria: 'Cardiologia',
        contatos: [
            {
                nome: 'Liana Desidério',
                detalhes: ['Hospital Primavera - (79) 2105-2600']
            },

        ]
    },
    {
        categoria: 'Dermatologia',
        contatos: [
            {
                nome: 'Juliana Oliveira',
                detalhes: ['Centro Médico Jardins - (79) 99805-0108']
            },
            {
                nome: 'Caroline Paias',
                detalhes: ['Centro Médico Jardins - (79) 3025-6162 / 99926-6162']
            },
            {
                nome: 'Marina Sobral',
                detalhes: ['Clínica Sônia Santana - (79) 3214-6040 / 99635-6940', 'Saúde Center - (79) 3303-1000 / 99648-3000']
            },
        ]
    },
    {
        categoria: 'Ultrassonografia',
        contatos: [
            {
                nome: 'André Aboim',
                detalhes: ['Clínica Pro Imagem - (79) 99911-9612 / 3214-1545']
            },
            {
                nome: 'Andrea Figueiredo',
                detalhes: ['UniSaúde - (79) 3026-1414', 'Uniclin - (79) 3023-4040 / 99993-9990']
            },
            {
                nome: 'Fernanda Sajuan',
                detalhes: ['Cemise - (79) 3304-1000']
            },
        ]
    },
    {
        categoria: 'Histeroscopia',
        contatos: [
            {
                nome: 'Daniela Prado',
                detalhes: ['Clínica Santa Helena - (79) 98806-0296 / 99113-8142']
            },
        ]
    },
    {
        categoria: 'Patologia do trato genital inferior (PTGI)',
        contatos: [
            {
                nome: 'Ivi Gonçalves',
                detalhes: ['Cemise - (79) 3304-1000']
            },
        ]
    },
    {
        categoria: 'Cirurgia geral',
        contatos: [
            {
                nome: 'Paulo Vicente',
                detalhes: ['Gastrus - (79) 2034-5505', 'Hospital Primavera - (79) 2105-2600']
            },
        ]
    },
    {
        categoria: 'Cirurgia oncológica',
        contatos: [
            {
                nome: 'José Vieira Barreto Júnior',
                detalhes: ['Hospital Primavera - (79) 2105-2600']
            },
        ]
    },
    {
        categoria: 'Cirurgia vascular',
        contatos: [
            {
                nome: 'Igor Pereira',
                detalhes: ['Hospital Renascença - (79) 2107-6400', 'Cemise - (79) 3304-1001'],
            },
            {
                nome: 'Fred Brasileiro',
                detalhes: ['Clínica Inova - (79) 3025-7669 / 99945-5399'],
            },
        ]
    },
    {
        categoria: 'Endoscopia',
        contatos: [
            {
                nome: 'Fábio Onias Júnior',
                detalhes: ['Núcleo de Endoscopia Avançada - (79) 98100-3993 / 2106-7201'],
            },
        ]
    },
    {
        categoria: 'Urologia',
        contatos: [
            {
                nome: 'Lucas Meira',
                detalhes: ['Clínica Inova - (79) 3025-7669 / 99945-5399'],
            },
        ]
    },
    {
        categoria: 'Fisioterapia pélvica',
        contatos: [
            {
                nome: 'Paula Teixeira',
                detalhes: ['Studio Wave - (79) 3043-8212 / 99880-8512'],
            },
        ]
    },
    {
        categoria: 'Psicologia',
        contatos: [
            {
                nome: 'Alessivania Dantas',
                detalhes: ['Horizonte Jardins - (79) 99863-6292'],
            },
            {
                nome: 'Luana Sobral',
                detalhes: ['Saúde Center - (79) 3303-1000 / 99648-3000'],
            },
        ]
    },
    {
        categoria: 'Nutrição',
        contatos: [
            {
                nome: 'Cecília Vázquez',
                detalhes: ['Serviço Integrado de Gastroenterologia e Obesidade - (79) 98874-7446 / 2107-1092'],
            },
        ]
    },
)
