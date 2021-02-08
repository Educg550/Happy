const Database = require('./db');

Database.then(function(db) {
    // inserção de dados na tabela
    db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            '-23.5180237',
            '-46.6226418',
            'Orfanato Raio de Luz',
            'Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
            'https://images.unsplash.com/photo-1601950293362-651f3b3cc35f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
            'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
            'Horário de visitas Das 18h até 8h',
            '1'
        );
    `)

    //consulta de dados na tabela
})
