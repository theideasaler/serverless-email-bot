import EmailHandler from './src/controller/email.controller';

export const handler = async function(req:any) {
  const res = await EmailHandler.sendEmail(JSON.parse(req.body));
  return {
      statusCode: 200,
      body: JSON.stringify(res),
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Origin': '*'
      },
      isBase64Encoded: false
  };
};
module.exports.emailHandler = handler;
