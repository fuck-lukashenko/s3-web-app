import S3BasedAPIGateway from 's3-api-gateway-sdk';

const instance = new S3BasedAPIGateway({
  clientId: process.env.REACT_APP_S3_BASED_API_GATEWAY_CLIENT_ID,
  logger: console,
});

export default instance;
