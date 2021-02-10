const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserção de dados na tabela
  await saveOrphanage(db, {
    lat: "-23.5180237",
    lng: "-46.6726418",
    name: "Lar das meninas",
    about:
      "Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "937261937",
    images: [
      "https://images.unsplash.com/photo-1601950293362-651f3b3cc35f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

      "https://images.unsplash.com/photo-1603489549539-c94a4822ae8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=736&q=80",

      "https://images.unsplash.com/photo-1603473371263-0c988846f807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });

  //consulta de dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consulta de somente 1 orfanato, pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  // //deleta de dados especificos da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
});
