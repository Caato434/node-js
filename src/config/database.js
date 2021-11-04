const oracledb = require('oracledb');
const host = '15.15.0.59';
const database = 'students';
const userName = 'hassan';
const password = 'hassan';

checkfunction();
async function checkfunction() {
    let connection
    try {

        oracledb.initOracleClient({ libdir: 'C:\\instantclient_21_3' })
        connection = await oracledb.getConnection({
            user: userName,
            password: password,
            connectString: host + '/' + database
        });
        console.log('connected to the datebase');
        let result = await connection.execute(`select * from persons `)
        console.log(result)
            //return connection;

    } catch (err) {
        console.error(err)
    } finally {
        if (connection) {
            await connection.close();
        }


    }
}

module.exports = { checkfunction, getConnection }