//importar a dependencia do sql3
const sqlite3 = require('sqlite3').verbose()
// criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//   //criar tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   // inserir dados na tabela
//   const query = `
//     INSERT INTO places(
//       image, 
//       name, 
//       address, 
//       address2, 
//       state, 
//       city, 
//       items
//     ) VALUES (?,?,?,?,?,?,?);
//   `

//   const values = [
//     "https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "Colectoria",
//     "Guilherme Gemballa, Jardim América",
//     "Numero 260",
//     "Rio do Sul",
//     "Santa Catarina",
//     "Resíduos Eletrônicos, Lâmpadas"
//   ]

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     }

//     console.log("cadastrado com sucesso")
//     console.log(this)
//   }

//   //db.run(query, values, afterInsertData)

//   //consultar os dados da tabela
//   // db.all(`SELECT  name FROM places`, function (err, rows) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }
//   //   console.log("Aqui estāo os registros: ")
//   //   console.log(rows)
//   // })

//   //Deletar um dado na tabela
//   db.run(`DELETE FROM places WHERE id = ?`, [6], function (err) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log("Registro deletado com sucesso")
//   })



// })